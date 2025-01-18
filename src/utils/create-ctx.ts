import { useContext, createContext } from 'react';

export function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);

  const useCtx = () => {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error(`Cannot use ${ctx.displayName} context: ctx must be inside a Provider with a value.`);
    return c;
  };

  return [useCtx, ctx] as const;
}
