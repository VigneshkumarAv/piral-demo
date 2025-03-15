import { DashboardContainerProps } from "piral";
import * as React from "react";
import { ExtensionSlot, LayoutProps } from "piral-core";
export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  children,
}) => (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to my new microfrontend app shell</p>
    <div className="tiles">     
      {children}
    </div>
    <ExtensionSlot name="Carousel" />
  </div>
);
