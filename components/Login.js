import React, { useState, useEffect } from "react";
import { TextInput, Text } from "react-native";
import style from "./Login.style";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Space } from "./Space";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ButtonLabel = {
  sent: "登录",
  before: "获取验证码",
};

const AREA_CODE = 86;

export function Login() {
  const [scrollable, setScrollable] = useState(false);

  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [label, setLabel] = useState(ButtonLabel.before);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count <= 0 && sent) {
      setLabel(ButtonLabel.sent);
      setSent(false);
    }

    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <Container scrollable>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        scrollEnabled={scrollable}
      >
        <Logo size={180} />
        <Space height={150} />
        <TextInput
          style={style.input}
          placeholder="输入手机号"
          keyboardType="numeric"
          value={phone}
          editable={!sent}
          onFocus={() => setScrollable(true)}
          onBlur={() => setScrollable(false)}
          onChangeText={(value) => {
            setPhone(value);
            if (scrollable) setScrollable(false);
          }}
        />
        <Space height={16} />
        <TextInput
          style={style.input}
          placeholder="验证码"
          keyboardType="numeric"
          value={otp}
          onFocus={() => setScrollable(true)}
          onBlur={() => setScrollable(false)}
          onChangeText={(text) => {
            setOtp(text);
            if (scrollable) setScrollable(false);
          }}
        />
        <Space height={32} />
        <Button
          title={count > 0 ? `${count}秒后可重新获取` : label}
          color="white"
          style={style.button}
          disabled={sent ? !otp : !phone}
          onPress={() => {
            if (!sent) {
              setSent(true);
              setCount(10);
            } else {
            }
          }}
        />
      </KeyboardAwareScrollView>
    </Container>
  );
}
