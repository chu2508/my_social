import React from "react";
import { Text, View } from "@tarojs/components";
import "./styles.scss";

const Digit = (props: { value: number }) => {
  const { value } = props;
  const digits = Array.from({ length: 11 }).map((_, i) => (i > 0 ? i % 10 : 0));
  return (
    <View className="my-digit">
      <View style={{top:  100 * value}}>
        {digits.map((val, idx) => (
          <Text className="my-digit__val" key={idx}>
            {val}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Number = (props: { value: number }) => {
  const [integer, decimal] = props.value.toString().split(".") as [
    string,
    string | undefined
  ];

  if (props.value === 0) {
    return "0";
  }

  return (
    <div className="numbers-container">
      {integer.split("").map((number, index) => {
        let scrollClass = "";
        if (number === "0") {
          scrollClass = "numbers-scroll0" + Math.ceil(Math.random() * 5);
        } else {
          scrollClass = "numbers-scroll" + number;
        }

        return (
          <div className="numbers-box" key={index}>
            <span className={scrollClass}>
              <label>0</label>
              <label>1</label>
              <label>2</label>
              <label>3</label>
              <label>4</label>
              <label>5</label>
              <label>6</label>
              <label>7</label>
              <label>8</label>
              <label>9</label>
              <label>0</label>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Number;
