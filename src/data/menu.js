const MENU_IMAGES = {
	sandwich: "https://adc-dev-images-recipes.s3.eu-west-1.amazonaws.com/shutterstock_213726613.jpg",
	tacos: "https://img.cuisineaz.com/660x495/2019/04/17/i146583-tacos-poulet-curry.jpeg",
	panini: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6h2qnL_wFGFza86STL63lda6PP9FvS24BLwd9b5g9DacpeYRD71mavxq&s=10",
	chawarma: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
	salade: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
	dessert: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hltg6vrfZqz5EaXsgNWWBcQ-PRdjGHkHCs6hPmcrUQpviCHUKXCfzmLf&s=10",
	boissons: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
	homburger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
	pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
	"les-jus": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
	cocktail: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
	"les-plat": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
};

const item = (name, price, category, tags = []) => ({
	name,
	description: name,
	price: `${price} DH`,
	tags,
	image: MENU_IMAGES[category]
});

export const MENU_DATA = [
	{ id: "sandwich", name: "Sandwich", icon: "🥪", items: [
		item("Omelette Simple", "12.00", "sandwich", ["veg"]), item("Chamali", "14.00", "sandwich"), item("Thon", "14.00", "sandwich"), item("Tortia", "14.00", "sandwich", ["veg"]), item("Viand Hache", "17.00", "sandwich"), item("Saucisse", "17.00", "sandwich"), item("Foi", "18.00", "sandwich"), item("Poulet", "19.00", "sandwich"), item("Dande", "19.00", "sandwich"), item("Mixt", "19.00", "sandwich"), item("Frouit de Mer", "30.00", "sandwich")
	] },
	{ id: "tacos", name: "Tacos", icon: "🌯", items: [
		item("Viande Hachee", "28.00", "tacos"), item("Mergjez", "27.00", "tacos", ["spice"]), item("Foi", "30.00", "tacos"), item("Poulet", "30.00", "tacos"), item("Nuggets", "30.00", "tacos"), item("Mixt", "30.00", "tacos"), item("Dande", "30.00", "tacos"), item("Fruit de Mer", "40.00", "tacos")
	] },
	{ id: "panini", name: "Panini", icon: "🥖", items: [
		item("Fromage", "18.00", "panini", ["veg"]), item("Omelette", "18.00", "panini", ["veg"]), item("Thon", "20.00", "panini"), item("Viand Hachee", "23.00", "panini"), item("Merguez", "23.00", "panini", ["spice"]), item("Foi", "25.00", "panini"), item("Poulet", "25.00", "panini"), item("Mixte", "25.00", "panini"), item("Dande", "25.00", "panini"), item("Nuggets", "25.00", "panini"), item("Fruit de Mer", "30.00", "panini")
	] },
	{ id: "chawarma", name: "Chawarma", icon: "🥙", items: [
		item("Chawarma Sandwich sans frits", "20.00", "chawarma"), item("Chawarma Sandwich avec frits", "25.00", "chawarma"), item("Chawarma Plat", "35.00", "chawarma")
	] },
	{ id: "salade", name: "Salade", icon: "🥗", items: [
		item("Salade Mexicaine", "17.00", "salade", ["veg"]), item("Salade Nicoise", "18.00", "salade", ["veg"]), item("Plat Frite", "10.00", "salade", ["veg"]), item("Cornet Frite", "10.00", "salade", ["veg"])
	] },
	{ id: "dessert", name: "Dessert", icon: "🍨", items: [
		item("Flan", "07.00", "dessert", ["veg"]), item("Mhalabia Simple", "13.00", "dessert", ["veg"]), item("Salade Fruit Orange", "15.00", "dessert", ["veg"]), item("Mhalabia Fruit Sec", "15.00", "dessert", ["veg"]), item("Salade Fruit Panache", "15.00", "dessert", ["veg"]), item("Natiase", "15.00", "dessert", ["veg"]), item("Salade Fruit Avocat", "18.00", "dessert", ["veg"])
	] },
	{ id: "boissons", name: "Boissons", icon: "🥤", items: [
		item("Eau Minérale Petit", "05.00", "boissons"), item("Eau Minérale Gr", "10.00", "boissons"), item("Boisson Canette", "08.00", "boissons"), item("Boisson Gazeuse 1L", "15.00", "boissons")
	] },
	{ id: "homburger", name: "Homburger", icon: "🍔", items: [
		item("Homburger Simple", "15.00", "homburger"), item("Cheese Burger", "17.00", "homburger"), item("Double Cheese", "19.00", "homburger"), item("Egg Burger", "20.00", "homburger"), item("Egg Cheese Burger", "23.00", "homburger"), item("Double Egg Burger", "25.00", "homburger"), item("Super Burger", "28.00", "homburger", ["signature"])
	] },
	{ id: "pizza", name: "Pizza", icon: "🍕", items: [
		item("Margarita", "20.00", "pizza", ["veg"]), item("Quatre Fromage", "23.00", "pizza", ["veg"]), item("Regina Thon", "25.00", "pizza"), item("Bolognese", "27.00", "pizza"), item("Poulet", "28.00", "pizza"), item("Mixt", "30.00", "pizza"), item("Quatre Saisons", "35.00", "pizza"), item("Fruit de Mer", "45.00", "pizza"), item("Chamali", "50.00", "pizza", ["signature"])
	] },
	{ id: "les-jus", name: "Les Jus", icon: "🧃", items: [
		item("Pomme", "10.00", "les-jus", ["veg"]), item("Poire", "10.00", "les-jus", ["veg"]), item("Banane", "10.00", "les-jus", ["veg"]), item("Orange", "10.00", "les-jus", ["veg"]), item("Payaye", "12.00", "les-jus", ["veg"]), item("Panaché", "13.00", "les-jus", ["veg"]), item("Pech", "13.00", "les-jus", ["veg"]), item("Kaki", "15.00", "les-jus", ["veg"]), item("Kiwi", "15.00", "les-jus", ["veg"]), item("Fraise", "15.00", "les-jus", ["veg"]), item("Avocat", "15.00", "les-jus", ["veg"]), item("Gingembre", "15.00", "les-jus", ["veg"]), item("Mangue", "15.00", "les-jus", ["veg"]), item("Ananas", "18.00", "les-jus", ["veg"]), item("Avocat, Orange", "18.00", "les-jus", ["veg"]), item("Supplement", "05.00", "les-jus"), item("Fruit Sec...", "18.00", "les-jus", ["veg"])
	] },
	{ id: "cocktail", name: "Cocktail", icon: "🍹", items: [
		item("Sportif", "15.00", "cocktail", ["veg"]), item("Exotique", "15.00", "cocktail", ["veg"]), item("Mojito", "15.00", "cocktail", ["veg"]), item("Fraîche", "16.00", "cocktail", ["veg"]), item("Hawayne", "17.00", "cocktail"), item("Cappuccino", "17.00", "cocktail"), item("Avocat Orio", "18.00", "cocktail", ["veg"]), item("Avocat Fruit Sec", "19.00", "cocktail", ["veg"]), item("Royal", "20.00", "cocktail", ["signature"]), item("Chamali", "20.00", "cocktail", ["signature"]), item("Avocat Kitkat", "20.00", "cocktail", ["veg"]), item("Petit Zaazaa", "25.00", "cocktail", ["signature"]), item("Zaazaa", "30.00", "cocktail", ["signature"]), item("Dragon", "25.00", "cocktail", ["signature"])
	] },
	{ id: "les-plat", name: "Les Plat", icon: "🍽️", items: [
		item("Omelette Plat", "17.00", "les-plat", ["veg"]), item("Tortia", "18.00", "les-plat", ["veg"]), item("Poulet", "28.00", "les-plat"), item("Viande Hacher", "28.00", "les-plat"), item("Merguez", "25.00", "les-plat", ["spice"]), item("Foi", "25.00", "les-plat"), item("Plat Mixt", "30.00", "les-plat"), item("Plat Nuggets", "33.00", "les-plat"), item("Plat Steck", "34.00", "les-plat"), item("Plat Chamali", "35.00", "les-plat", ["signature"])
	] }
];

export const TAG_LABELS = { signature: "Signature", veg: "Végétarien", spice: "Épicé" };

export const CAT_GRADIENTS = {
	sandwich: "linear-gradient(150deg,#f7c9dc,#e01a63)", tacos: "linear-gradient(150deg,#f6c453,#c11151)", panini: "linear-gradient(150deg,#e8b56a,#9c0d3d)", chawarma: "linear-gradient(150deg,#d8a05d,#6b2c1b)", salade: "linear-gradient(150deg,#9bd58d,#4d9b69)", dessert: "linear-gradient(150deg,#f9b8d1,#c11151)", boissons: "linear-gradient(150deg,#8fd7d2,#e01a63)", homburger: "linear-gradient(150deg,#f0a500,#bf3604)", pizza: "linear-gradient(150deg,#ff6f59,#b33939)", "les-jus": "linear-gradient(150deg,#ffd166,#ef476f)", cocktail: "linear-gradient(150deg,#118ab2,#073b4c)", "les-plat": "linear-gradient(150deg,#d19a66,#5c4033)"
};
