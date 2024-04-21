enum Gender {
  MASCULINE,
  FEMININE,
}

enum Hands {
  LEFT,
  RIGHT,
}

enum IronMaterial {
  STEEL,
  GRAPHITE,
}

interface IronPersonalization {
  gender: Gender;
  hand: Hands;
  material: IronMaterial;
  gripPersonalization?: boolean;
}

class CustomIron {
  gender: Gender;
  hand: Hands;
  material: IronMaterial;
  gripPersonalization: boolean;

  constructor(ironPersonalization: IronPersonalization) {
    this.gender = ironPersonalization.gender;
    this.hand = ironPersonalization.hand;
    this.material = ironPersonalization.material;
    this.gripPersonalization =
      ironPersonalization?.gripPersonalization ?? false;
  }

  static Builder = class {
    gender: Gender;
    hand: Hands;
    material: IronMaterial;
    gripPersonalization: boolean;

    setGender(gender: Gender) {
      this.gender = gender;
      return this;
    }

    setHand(hand: Hands) {
      this.hand = hand;
      return this;
    }

    setMaterial(material: IronMaterial) {
      this.material = material;
      return this;
    }

    setGripPersonalization(gripPersonalization: boolean) {
      this.gripPersonalization = gripPersonalization;
      return this;
    }

    build() {
      const customIron = new CustomIron({ ...this });
      return customIron;
    }
  };
}
