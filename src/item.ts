export class Item {
  constructor(private name: string, private price: number) {}

  public say(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerHTML = "name：" + this.name + "  price: " + this.price + "JPY";
    }
  }
}
