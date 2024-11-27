// Créer un Objet représentant un cercle avec une méthode pour calculer sa surface.

let circle = {
    radius: 15,
    unit: "cm",
    surface: function() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.surface() + " " + circle.unit + "²");

// const circle = {radius: 15, unit: "cm"};
//
// function CalculerAireCercle(circle) {
//     const circlearea = {
//         radius: circle.radius,
//         surface: function() {
//             return Math.PI * this.radius * this.radius;
//         }
//     }
//     console.log(circlearea.surface() + " " + circle.unit + "²");
// }
//
// CalculerAireCercle(circle);