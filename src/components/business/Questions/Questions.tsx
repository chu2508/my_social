import useToggle from "@src/tools/useToggle";
import { View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import { useDidHide } from "@tarojs/taro";
import Panel from "@ui/Panel";
import classNames from "classnames";
import { useContext } from "react";
import { BiChevronRight } from "react-icons/bi";
import styles from "./style.module.scss";
import useQuestionsService, {
  Question,
  QuestionsService
} from "./useQuestions";

const QuestionItem = (props: { question: Question }) => {
  const { receiveReward } = useContext(QuestionsService);
  const { question } = props;
  const btnClass = classNames(styles.item_btn, {
    [styles.active]: question.isResolved,
    [styles.confirm]: question.isReceived
  });
  return (
    <View className={styles.item}>
      <View className={styles.item_left}>
        <View className={styles.title}>{question.name} </View>
        <View className={styles.sub_title}>{question.reward}</View>
      </View>
      {question.isReceived && <View className={btnClass}>已完成</View>}
      {question.isPending && (
        <View className={btnClass} onClick={question.execAction}>
          去完成
        </View>
      )}
      {question.isResolved && (
        <View className={btnClass} onClick={() => receiveReward(question)}>
          领取奖励
        </View>
      )}
    </View>
  );
};

const Dialog = (props: { onMaskClick?: () => void }) => {
  const { questions } = useContext(QuestionsService);

  return (
    <View className={styles.dialog}>
      <View className={styles.mask} onClick={props.onMaskClick} />
      <View className={styles.container}>
        {questions.map((q, key) => (
          <QuestionItem key={key} question={q} />
        ))}
      </View>
    </View>
  );
};

const QuestionPanelHead = (props: ViewProps) => {
  return (
    <View
      {...props}
      className={classNames("my-panel__header mb-30", styles.panel_head)}
    >
      <View className="my-panel__title">做任务得青藤币</View>
      <View className={styles.head_right}>
        查看更多任务
        <BiChevronRight size={20} />
      </View>
    </View>
  );
};

const Questions = () => {
  const state = useQuestionsService();
  const { flag, toggle, left } = useToggle();
  useDidHide(() => {
    left()
  })
  return (
    <QuestionsService.Provider value={state}>
      {state.firstQuestion && (
        <Panel renderHeader={() => <QuestionPanelHead onClick={toggle} />}>
          <QuestionItem question={state.firstQuestion} />
        </Panel>
      )}
      {flag && <Dialog onMaskClick={toggle} />}
    </QuestionsService.Provider>
  );
};

export default Questions;
