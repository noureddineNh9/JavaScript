   const character = {
      name: "Simon",
      getCharacter() {
         return this.name;
      },
   };
   const giveMeTheCharacterNOW = character.getCharacter;
   //How Would you fix this?
   console.log("?", giveMeTheCharacterNOW().bind(character)); // ok