interface ItemProps {
  desc: string;
  value: number;
}

export class Item {
  private readonly props: ItemProps;

  constructor(props: ItemProps) {
    this.validateDesc(props.desc);
    this.validateValue(props.value);
    this.props = props;
  }

  private validateDesc(value: string): void {
    if (value.trim().length === 0) {
      throw new Error('Invalid description');
    }
  }

  private validateValue(value: number): void {
    if (isNaN(value)) {
      throw new Error('Invalid value');
    }
  }

  public get desc() {
    return this.props.desc;
  }

  public set desc(value: string) {
    this.props.desc = value;
  }

  public get value() {
    return this.props.value;
  }

  public set value(value: number) {
    this.props.value = value;
  }
}
