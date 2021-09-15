import { createContext, useContext, FC } from "react";

type Token<T> = T;

const serviceMap = new Map();
const context = createContext(serviceMap)

export const createToken = <T extends (...arg: any) => any>(
  serviceFactory: T
): Token<T> => {
  serviceMap.set(serviceFactory, serviceFactory());
  return serviceFactory as Token<T>;
};

export const Provider:FC<{value?:Map<any, any> }> = (props) => {
 return <context.Provider value={props.value || serviceMap}>
   {props.children}
  </context.Provider>
}

export const useService = <T extends (...arg: any) => any>(
  token: Token<T>
): ReturnType<T> => {
  const ctx = useContext(context)
  if (ctx.has(token)) {
    return  ctx.get(token);
  } else {
    throw new Error("not found service");
  }
};
