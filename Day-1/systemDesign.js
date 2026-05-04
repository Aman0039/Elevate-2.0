class MinHeap {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.push(val);
    this.data.sort((a, b) => a - b);
  }

  poll() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class MaxHeap {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.push(val);
    this.data.sort((a, b) => b - a);
  }

  poll() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Elevator {
  constructor() {
    this.currentFloor = 1;
    this.direction = "IDLE";

    this.upRequests = new MinHeap();
    this.downRequests = new MaxHeap();
  }

  addRequest(floor) {
    if (floor === this.currentFloor) {
      console.log(`Already at floor ${floor}, opening door`);
      return;
    }

    if (floor > this.currentFloor) {
      this.upRequests.add(floor);
    } else {
      this.downRequests.add(floor);
    }
  }

  nextStop() {
    // 🟢 UP direction
    if (this.direction === "UP") {
      if (!this.upRequests.isEmpty()) {
        return this.upRequests.poll();
      } else if (!this.downRequests.isEmpty()) {
        this.direction = "DOWN";
        return this.downRequests.poll();
      }
    }

    // 🔴 DOWN direction
    if (this.direction === "DOWN") {
      if (!this.downRequests.isEmpty()) {
        return this.downRequests.poll();
      } else if (!this.upRequests.isEmpty()) {
        this.direction = "UP";
        return this.upRequests.poll();
      }
    }

    // ⚪ IDLE case → choose nearest
    if (this.direction === "IDLE") {
      if (!this.upRequests.isEmpty() && !this.downRequests.isEmpty()) {
        const up = this.upRequests.peek();
        const down = this.downRequests.peek();

        if (
          Math.abs(up - this.currentFloor) <
          Math.abs(this.currentFloor - down)
        ) {
          this.direction = "UP";
          return this.upRequests.poll();
        } else {
          this.direction = "DOWN";
          return this.downRequests.poll();
        }
      }

      if (!this.upRequests.isEmpty()) {
        this.direction = "UP";
        return this.upRequests.poll();
      }

      if (!this.downRequests.isEmpty()) {
        this.direction = "DOWN";
        return this.downRequests.poll();
      }
    }

    return null;
  }

  move() {
    const next = this.nextStop();

    if (next === null) {
      console.log("No requests. Elevator is IDLE.");
      this.direction = "IDLE";
      return;
    }

    console.log(`Moving from ${this.currentFloor} → ${next}`);
    this.currentFloor = next;
  }
}


    const lift = new Elevator();

lift.addRequest(5);
lift.addRequest(8);
lift.addRequest(2);
lift.addRequest(1);

lift.direction = "UP";

lift.move(); // 1 -> 5
lift.move(); // 5 -> 8
lift.move(); // switch → DOWN → 2
lift.move(); // 2 -> 1