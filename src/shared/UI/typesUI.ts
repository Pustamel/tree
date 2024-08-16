export type itemMenuBtn = {
  id: any,
  title: string,
  icon?: string,
  colorIcon?: string
}

export interface PropsMenuBtn {
  items: itemMenuBtn[],
  icon?: string,
  sizeBtn?: string,
  flat?: boolean,
  colorIcon?: string
}