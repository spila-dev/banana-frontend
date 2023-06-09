import { NativeError } from "..";

export type IO = {
  input: object;
  output: object;
};

export type SocketResponseErrors = NativeError[];

export interface SocketResponse<Data = IO["output"]> {
  data: Data;
  errors: SocketResponseErrors;
  ok: boolean;
}

export type SocketMethods = "on" | "onAny" | "customOn" | "once";

export interface SocketResponse<Data = IO["output"]> {
  data: Data;
  errors: SocketResponseErrors;
  ok: boolean;
}

export type ResponseCallback<Data = IO["output"]> = (
  response: SocketResponse<Data>
) => Promise<Data>;

export type SocketErrorCallback = (errors: SocketResponseErrors) => void;

export type RequestTransformer<Data = IO["input"]> = (
  requestData: Data
) => Data;

export type ResponseTransformer<DataType = IO["output"]> = (
  response: SocketResponse<DataType>
) => SocketResponse<DataType>;

export type Interceptor<Data> = (data: Data) => Data;

export type Interceptors<Data = IO["input"] | IO["output"]> =
  Interceptor<Data>[];
