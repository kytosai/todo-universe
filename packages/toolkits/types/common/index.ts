import { YN_VALUE } from "../../constants/common";

export type YNValueType = (typeof YN_VALUE)[keyof typeof YN_VALUE];
