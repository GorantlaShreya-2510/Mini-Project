const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const homeRemedies = {
    "cold": [
        "Drink warm turmeric milk before bed.",
        "Take honey with ginger juice for relief.",
        "Steam inhalation with eucalyptus oil."
    ],
    "cough": [
        "Take honey with ginger juice.",
        "Drink warm herbal tea.",
        "Gargle with warm salt water."
    ],
"fever": [
        "Drink tulsi (holy basil) tea.",
        "Have lukewarm water with honey and lemon.",
        "Apply a cold compress to reduce body temperature."
    ],
    "kidney stones": [
        "Drink plenty of water (especially coconut water).",
        "Consume lemon juice with olive oil.",
        "Drink barley water regularly."
    ],
    "diabetes": [
        "Drink bitter gourd juice.",
        "Consume fenugreek seeds soaked overnight.",
        "Have cinnamon tea daily."
    ],
    "hair growth": [
        "Apply onion juice to the scalp.",
        "Use coconut oil mixed with curry leaves.",
        "Massage with castor oil and almond oil."
    ],
    "stomach pain": [
        "Drink warm ginger tea.",
        "Have a mixture of ajwain (carom seeds) and black salt.",
        "Consume buttermilk with a pinch of cumin powder."
    ],
    "sore throat": [
        "Gargle with warm salt water.",
        "Drink honey and ginger tea.",
        "Have a spoonful of turmeric and honey paste."
    ],
    "headache": [
        "Apply peppermint oil to the temples.",
        "Drink ginger tea.",
        "Massage with coconut oil and camphor."
    ],
    "stomach upset": [
        "Drink cumin water.",
        "Eat a banana or plain yogurt.",
        "Drink peppermint tea."
    ],
    "vomiting": [
        "Sip on ginger or mint tea.",
        "Drink lemon water with a pinch of salt.",
        "Eat lightly salted crackers."
    ],
    "asthma": [
        "Inhale steam with eucalyptus oil.",
        "Drink warm honey and ginger tea.",
        "Consume soaked figs in the morning."
    ],
    "low blood pressure": [
        "Drink saltwater or electrolyte drinks.",
        "Consume almonds and raisins soaked overnight.",
        "Have beetroot juice regularly."
    ],
   "sun stroke": [
        "Drink buttermilk and coconut water.",
        "Apply onion juice behind the ears.",
        "Keep yourself hydrated with watermelon and cucumber juice."
    ],
    "acidity ": [
        "Drink cold milk or coconut water.",
        "Eat a banana or chew basil leaves.",
        "Mix a teaspoon of baking soda in water and drink."
    ],
    "high blood pressure": [
        "Drink beetroot or pomegranate juice.",
        "Eat garlic cloves daily.",
        "Reduce salt intake and drink hibiscus tea."
    ],
    "arthritis": [
        "Massage with warm mustard or sesame oil.",
        "Drink turmeric milk daily.",
        "Consume fenugreek seeds soaked overnight."
    ],
    "constipation": [
        "Drink warm water with lemon and honey in the morning.",
        "Eat papaya, prunes, or figs.",
        "Consume flaxseeds and fiber-rich foods."
    ],
    "skin rashes and allergies": [
        "Apply aloe vera gel or coconut oil.",
        "Drink neem leaf juice.",
        "Take an oatmeal bath for soothing skin."
    ],
    "weakness": [
        "Drink dates soaked in warm milk.",
        "Eat nuts and dry fruits.",
        "Stay hydrated with electrolyte-rich drinks."
    ],
        "eye strain": [
            "Place cucumber slices on the eyes.",
            "Use rose water as an eye drop.",
            "Blink often and massage around the eyes gently."
        ],    
    "toothache": [
        "Apply clove oil on the affected tooth.",
        "Rinse with warm salt water.",
        "Chew raw garlic for relief."
    ],
    "insomnia": [
        "Drink warm milk with nutmeg or turmeric.",
        "Practice deep breathing before bed.",
        "Avoid caffeine and screen time at night."
    ],
    "stress and anxiety": [
        "Drink chamomile tea or ashwagandha tea.",
        "Practice meditation and deep breathing.",
        "Apply lavender oil to the temples."
    ],
    "dandruff": [
        "Apply lemon juice and coconut oil to the scalp.",
        "Rinse hair with apple cider vinegar.",
        "Use aloe vera gel before washing hair."
    ],
    "menstrual pain": [
        "Drink ginger or cinnamon tea.",
        "Apply a hot water bag to the lower abdomen.",
        "Take a warm bath with Epsom salt."
    ],
    "cold sores": [
        "Apply honey or coconut oil to the affected area.",
        "Use aloe vera gel for soothing.",
        "Avoid spicy and acidic foods."
    ],
    "ear pain": [
        "Use warm garlic oil drops in the ear.",
        "Apply a warm compress.",
        "Chew gum if the pain is due to pressure."
    ],
    "migraine": [
        "Drink tulsi (holy basil) tea.",
        "Apply coriander and dry ginger paste on forehead.\n",
        "Rub peppermint oil on temples for pain relief.\n"
    ],
    "thyroid imbalance": [
        "Drink ashwagandha tea.",
        "Use cold-pressed coconut oil in cooking.",
        "Consume flaxseeds and Brazil nuts for selenium."
    ],
    "jaundice": [
        "Drink fresh sugarcane juice with a pinch of lemon.",
        "Drink tomato juice with black salt.",
        "Consume wheatgrass juice daily."
    ],
    "lung infection": [
        "Take black pepper and honey mix.",
        "Drink turmeric milk before bed.",
        "Boil bay leaves in water and inhale steam."
    ],
    "kidney infection": [
        "Drink coriander water soaked overnight.",
        "Drink barley water throughout the day.",
        "Consume tender coconut water regularly."
    ],
    "chickenpox": [
        "Spread neem leaves (Vepa Aku) on the bed to prevent itching.",
        "Take a neem leaf water bath for relief.",
        "Apply turmeric paste to reduce inflammation.",
        "Drink coconut water to stay hydrated and heal blisters.",
        "Apply raw honey to blisters for faster healing.",
        "Boil tulsi (holy basil) leaves in water and drink it.",
        "Soak in an oatmeal bath to soothe irritation."
    ],
    "brain boost": [
        "Drink Gotu Kola tea (boil fresh/dried leaves in water).",
        "Mix Gotu Kola powder with warm water, honey, or milk.",
        "Eat Gotu Kola leaves raw.",
    ],
    "irregular periods": [
        "Drink ginger tea daily to stimulate menstrual flow.",
        "Soak fennel seeds overnight and drink the water in the morning.",
        "Eat raw papaya regularly (avoid during periods).",
        "Add ground flaxseeds to smoothies or yogurt daily.",
        "Eat roasted sesame seeds with jaggery to boost hormone regulation.",
    ],
    "covid":[
        "turmeric water steam.",
        
    ]
};

// API to handle chat requests
app.get("/chat", (req, res) => {
    const userMessage = req.query.message.toLowerCase();
    if (homeRemedies[userMessage]) {
        res.json({ reply: homeRemedies[userMessage] });
    } else {
        res.json({ reply: ["Sorry, I don't have remedies for that."] });
    }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
