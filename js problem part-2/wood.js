function myFhasion( Shart, Pant, Shoe) {
    const perShart = 500;
    const perPant = 800;
    const perShoe = 1200;

    const totalNeededShart = Shart * perShart;
    const totalNeededPant = Pant * perPant;
    const totalNeededShoe = Shoe * perShoe;

    const totalShartPantShoe = totalNeededShart + totalNeededPant + totalNeededShoe;

    return totalShartPantShoe;
}

const myShartPantShoe = myFhasion(2, 4, 3);

console.log(myShartPantShoe);