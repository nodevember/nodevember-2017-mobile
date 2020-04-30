import React, {createContext} from 'react';

import {Event} from '../typings/data';

type DataContext = {
  initialLinkingUri?: string;
  event?: Event;
};

const DataContext = createContext<DataContext>({
  initialLinkingUri: '',
  event: {},
});

export const withData = <P extends DataContext>(
  Component: React.ComponentType<P>
): React.FC<Pick<P, Exclude<keyof P, keyof DataContext>>> => (
  props: Pick<P, Exclude<keyof P, keyof DataContext>>
) => {
  return (
    <DataContext.Consumer>
      {(data) => <Component {...(props as P)} {...data} />}
    </DataContext.Consumer>
  );
};

export default DataContext;
