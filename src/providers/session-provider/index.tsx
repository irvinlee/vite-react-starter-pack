import { ReactElement } from 'react';

import { SessionContext as ISessionContext} from './types';
import { createCtx } from '@utils/create-ctx';

const [useSessionContext, SessionContext] =
  createCtx<ISessionContext>();

interface Props {
  value: ISessionContext;
  children?: ReactElement;
}

const SessionProvider = ({ value, ...props }: Props) => {
  return <SessionContext.Provider {...props} value={value} />;
};

export default SessionProvider;
export { useSessionContext, SessionContext };
