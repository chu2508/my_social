import { View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import { FC } from "@tarojs/taro";
import classNames from "classnames";
import { ReactElement } from "react";
import "./style.scss";

type RenderSlot = () => ReactElement;

export interface PanelProps extends ViewProps {
  title?: string;
  renderHeader?: RenderSlot;
  renderFooter?: RenderSlot;
}

const Panel: FC<PanelProps> = props => {
  const content =
    typeof props.children === "function" ? props.children() : props.children;
  const header = props.renderHeader ? (
    props.renderHeader()
  ) : (
    <PanelHeader title={props.title} />
  );
  const footer = props.renderFooter ? props.renderFooter() : null;
  return (
    <View {...props} className={classNames("my-panel", props.className)}>
      {header}
      <View className="my-panel__content">{content}</View>
      {footer && <View>{footer}</View>}
    </View>
  );
};

const PanelHeader = (props: { title?: string }) => (
  <View className="my-panel__header mb-10">
    <View className="my-panel__title">{props.title}</View>
  </View>
);

export default Panel;
