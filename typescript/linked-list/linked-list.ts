class Node<TElement> {
  public next: Node<TElement> | null = null;
  public prev: Node<TElement> | null = null;
  constructor(public data: TElement) {}
}

export class LinkedList<TElement> {
  private head: Node<TElement> | null = null; // pointing at first element

  public push(element: TElement): void {
    // insert at the end
    const nodeEl = new Node(element);

    if (!this.head) {
      this.head = nodeEl;
    } else {
      // iterating until a node has no next : it's the last !
      const getLast = (node: Node<TElement>): Node<TElement> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      nodeEl.prev = lastNode;
      lastNode.next = nodeEl;
    }
  }

  public pop(): TElement | undefined {
    // remove and get last
    if (!this.head) {
      return undefined;
    } else {
      const getLast = (node: Node<TElement>): Node<TElement> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);

      const nodeValueToReturn = lastNode.data;

      if (lastNode.prev !== null) {
        lastNode.prev.next = null;
        this.head = lastNode.prev;
      } else {
        this.head = null;
      }

      return nodeValueToReturn;
    }
  }

  public shift(): TElement | undefined {
    // remove and get first
    if (!this.head) {
      return undefined;
    } else {
      const valueToReturn = this.head?.data;

      if (this.head.next) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else {
        this.head = null;
      }
      return valueToReturn;
    }
  }

  public unshift(element: TElement): void {
    // insert at begin
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  public delete(element: TElement): void {
    // delete one Node by its value
    const checkAfter = (
      startNode: Node<TElement>,
      value: TElement
    ): Node<TElement> | undefined => {
      let newStartNode = startNode;
      let found = false;

      while (!found) {
        if (newStartNode.data === value) {
          found = true;
          return newStartNode;
        } else if (newStartNode.next) {
          newStartNode = newStartNode.next;
        } else {
          found = true;
          return undefined;
        }
      }
    };

    if (this.head?.data === element) {
      if (this.head.prev) this.head.prev.next = this.head.next;
      if (this.head.next) this.head.next.prev = this.head.prev;

      if (this.head.prev === null && this.head.next === null) {
        this.head = null;
      }
    } else if (this.head) {
      const foundNode = checkAfter(this.head, element);

      if (foundNode !== undefined) {
        if (foundNode.prev) {
          foundNode.prev.next = foundNode.next;
        }
        if (foundNode.next) {
          foundNode.next.prev = foundNode.prev;
        }
      }
    }
  }

  public count(): number {
    let count = 0;

    if (!this.head) {
      return 0;
    }

    let nodeIteration: Node<TElement> | null = this.head;

    while (nodeIteration !== null) {
      count++;
      nodeIteration = nodeIteration.next;
    }

    return count;
  }
}
