const { createClient } = require('@sanity/client');
const { sanityClientConfig } = require('./index.js');

// import { client } from "@/sanity/client";
// import { createClient } from "@sanity/client";

const client = createClient(sanityClientConfig);

const categories = [
    {
        title: { en: "Food", tr: "Gıda", ar: "الغذاء" },
        description: "", // Empty for now
    },
    {
        title: { en: "Education", tr: "Eğitim", ar: "التعليم" },
        description: "",
    },
    {
        title: { en: "Shelter", tr: "Barınma", ar: "المأوى" },
        description: "",
    },
    {
        title: { en: "Health", tr: "Sağlık", ar: "الصحة" },
        description: "",
    },
    {
        title: { en: "Water", tr: "Su", ar: "المياه" },
        description: "",
    },
    {
        title: { en: "Clothing", tr: "Giyim", ar: "الملابس" },
        description: "",
    },
];

const deleteExistingCategories = async () => {
    try {
        const existingCategories = await client.fetch(`*[_type == "project_category"]{_id}`);

        if (existingCategories.length === 0) {
            console.log("✅ No existing categories found.");
            return;
        }

        console.log(`🗑 Deleting ${existingCategories.length} existing categories...`);

        for (const category of existingCategories) {
            // Find all documents that reference this category
            // const references = await client.fetch(`*[_type != "project_category" && references(^._id)]`);
            const references = await client.fetch(`*[references("${category._id}")]{_id}`);
            if (references.length > 0) {
                console.log(`🔗 Removing references from ${references.length} documents before deleting ${category._id}`);

                // Update each document to remove the reference
                for (const refDoc of references) {
                    await client
                        .patch(refDoc._id)
                        .unset([`categories`]) // Replace "category" with the actual reference field
                        .commit();
                    console.log(`✅ Removed reference from ${refDoc._id}`);
                }
            }

            // Now delete the category safely
            await client.delete(category._id);
            console.log(`🗑 Deleted: ${category._id}`);
        }

        console.log("✅ All existing categories deleted.");
    } catch (error) {
        console.error("❌ Error deleting existing categories:", error);
    }
};


// Function to import new categories
const importCategories = async () => {
    for (const category of categories) {
        try {
            const response = await client.create({
                _type: 'project_category',
                title: category.title,
                description: category.description,
            });
            console.log(`✅ Imported: ${category.title.en}`);
        } catch (error) {
            console.error(`❌ Error importing ${category.title.en}:`, error);
        }
    }
};

const runImport = async () => {
    await deleteExistingCategories();
    await importCategories();
};

runImport()