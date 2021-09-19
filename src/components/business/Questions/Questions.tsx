import useToggle from "@src/tools/useToggle";
import { View } from "@tarojs/components";
import { BiChevronRight } from "react-icons/bi";
import { useQuestions } from "./useQuestions";

const Questions = () => {
  const { questions, confirmQuestion, firstQuestion } = useQuestions();
  const { flag, toggle } = useToggle();
  return firstQuestion ? (
    <View>
      <View>
        <View>
          做任务赚取青藤币
          <View onClick={toggle}>
            更多 <BiChevronRight />
          </View>
        </View>
        <View>
          <View>
            <View>{firstQuestion.name} </View>
            <View>{firstQuestion.reward}</View>
          </View>
          <View onClick={firstQuestion.execAction.bind(firstQuestion)}>
            去完成
          </View>
        </View>
      </View>
      <View style={{ display: flag ? "block" : "none" }}>
        {questions.map((question, key) => {
          return (
            <View key={key}>
              <View>
                <View>{question.name} </View>
                <View>{question.reward}</View>
              </View>
              {question.isPending && (
                <View onClick={question.execAction.bind(question)}>去完成</View>
              )}
              {question.isResolve && (
                <View onClick={() => confirmQuestion(question)}>完成</View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  ) : null;
};

export default Questions;
