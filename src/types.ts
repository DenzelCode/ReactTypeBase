import { RouteComponentProps } from "react-router-dom";

export type PropBase<T, mapStateToProps, mapDispatchToProps> = RouteComponentProps & mapStateToProps & mapDispatchToProps & T; 