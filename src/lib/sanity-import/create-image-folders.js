const fs = require('fs');
const path = require('path');

// List of folder names
const folders = [
    "sicak-yemek",
    "icme-suyu",
    "ekmek-un",
    "cadir",
    "hijyen-paketi",
    "yenidogan-paketi",
    "egitim-destek",
    "altyapi-calismalari",
    "saglik-merkezleri",
    "ambulans",
    "hafizlik",
    "kurban",
    "kiyafet",
    "yarali-destek",
    "protez"
];

// Define the base directory (change this if needed)
const baseDir = path.join(__dirname, 'project-images'); // Creates inside "project-images"

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
}

// Create each folder inside the base directory
folders.forEach(folder => {
    const folderPath = path.join(baseDir, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folderPath}`);
    } else {
        console.log(`Folder already exists: ${folderPath}`);
    }
});

console.log("All folders created successfully!");