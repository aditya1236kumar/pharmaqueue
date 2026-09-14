const products = [
  {
    name: "Allcort-6",
    category: "specialty",
    categoryLabel: "Specialty care",
    composition: "Deflazacort 6 mg tablets",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-1.jpg",
    summary: "A glucocorticoid for anti-inflammatory and immunosuppressive care.",
    indications: ["Dermatitis", "Allergic disease", "Inflammatory disease", "Asthma", "Rheumatoid arthritis"],
  },
  {
    name: "Cureprox-200DT",
    category: "anti-infective",
    categoryLabel: "Anti-infective",
    composition: "Cefpodoxime proxetil 200 mg dispersible tablets",
    form: "Dispersible tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-2.jpg",
    summary: "Broad-spectrum antibacterial support for resistant infections.",
    indications: ["Respiratory tract infections", "ENT infections", "Urinary tract infections", "Skin & soft tissue"],
  },
  {
    name: "Curehem-F",
    category: "wellness",
    categoryLabel: "Women’s wellness",
    composition: "Ferrous ascorbate, folic acid, zinc & cyanocobalamin tablets",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-3.jpg",
    summary: "Complete hematinic care for healthy women and healthy generations.",
    indications: ["Iron deficiency anaemia", "Pregnancy & lactation", "Menstrual health", "Postpartum recovery"],
  },
  {
    name: "Cureprox-100MG",
    category: "paediatric",
    categoryLabel: "Paediatric",
    composition: "Cefpodoxime proxetil 100 mg dry syrup",
    form: "Dry syrup",
    pack: "18 g / 30 ml",
    image: "pdf-images/page-4.jpg",
    summary: "A paediatric broad-spectrum antibacterial in an easy-to-reconstitute syrup.",
    indications: ["Respiratory tract infections", "ENT infections", "Urinary tract infections", "Gastrointestinal infections"],
  },
  {
    name: "Cureprox-CV",
    category: "anti-infective",
    categoryLabel: "Anti-infective",
    composition: "Cefpodoxime 200 mg + clavulanic acid 125 mg",
    form: "Tablets",
    pack: "10 × 1 × 10 tablets",
    image: "pdf-images/page-5.jpg",
    summary: "A synergistic combination for respiratory tract infections.",
    indications: ["Respiratory tract infections", "ENT infections", "Urinary tract infections", "Bone & joint infections"],
  },
  {
    name: "Cyponest",
    category: "paediatric",
    categoryLabel: "Paediatric",
    composition: "Cyproheptadine HCl & tricholine citrate syrup",
    form: "Sugar-free syrup",
    pack: "200 ml",
    image: "pdf-images/page-6.jpg",
    summary: "Supports appetite, nutrition and healthy growth in children.",
    indications: ["Poor appetite", "Failure to thrive", "Underweight children", "Convalescence"],
  },
  {
    name: "Camcure D3",
    category: "wellness",
    categoryLabel: "Wellness",
    composition: "Cholecalciferol 60,000 IU softgel capsules",
    form: "Softgel capsules",
    pack: "1 × 4 capsules",
    image: "pdf-images/page-7.jpg",
    summary: "Vitamin D3 support for bone health, immunity and overall wellbeing.",
    indications: ["Vitamin D deficiency", "Bone health", "Immunity support", "Osteoporosis support"],
  },
  {
    name: "CX Clav-625",
    category: "anti-infective",
    categoryLabel: "Anti-infective",
    composition: "Amoxycillin 500 mg + clavulanic acid 125 mg + LAB",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-8.jpg",
    summary: "A complete combination designed for broad-spectrum antibacterial coverage.",
    indications: ["Respiratory tract infections", "ENT infections", "Urinary tract infections", "Skin infections"],
  },
  {
    name: "CX-Cure CL 200",
    category: "anti-infective",
    categoryLabel: "Anti-infective",
    composition: "Cefixime 200 mg + cloxacillin ER 500 mg + LAB",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-9.jpg",
    summary: "Wide-spectrum coverage with a dual-release antibacterial combination.",
    indications: ["Respiratory tract infections", "Throat & tonsillitis", "Skin & soft tissue", "Urinary tract infections"],
  },
  {
    name: "Curipaa",
    category: "specialty",
    categoryLabel: "Specialty care",
    composition: "Carica papaya leaf, tinospora, wheat germ oil & swertia chirata",
    form: "Syrup",
    pack: "200 ml",
    image: "pdf-images/page-10.jpg",
    summary: "A herbal formula positioned for platelet and immune support.",
    indications: ["Dengue fever", "Viral fevers", "Low platelet count", "Cough & cold"],
  },
  {
    name: "Curehem-XT",
    category: "paediatric",
    categoryLabel: "Paediatric",
    composition: "Ferrous ascorbate & folic acid suspension",
    form: "Suspension",
    pack: "200 ml",
    image: "pdf-images/page-11.jpg",
    summary: "A child-friendly hematinic suspension for iron stores and healthy blood formation.",
    indications: ["Iron deficiency anaemia", "Poor appetite", "Convalescence", "Nutritional anaemia"],
  },
  {
    name: "CureCoff Cold",
    category: "paediatric",
    categoryLabel: "Paediatric",
    composition: "Paracetamol, phenylephrine, chlorpheniramine & dextromethorphan syrup",
    form: "Syrup",
    pack: "60 ml",
    image: "pdf-images/page-12.jpg",
    summary: "Paediatric cough and cold support for congestion, cough and fever.",
    indications: ["Common cold", "Blocked or runny nose", "Cough with phlegm", "Fever with cold"],
  },
  {
    name: "Infacure-D",
    category: "specialty",
    categoryLabel: "Pain care",
    composition: "Aceclofenac, paracetamol & serratiopeptidase tablets",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-13.jpg",
    summary: "Triple-action support for pain, inflammation and swelling.",
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Dental pain", "Sports injuries"],
  },
  {
    name: "Infacure-M",
    category: "paediatric",
    categoryLabel: "Paediatric",
    composition: "Paracetamol 125 mg + mefenamic acid 50 mg / 5 ml",
    form: "Syrup",
    pack: "60 ml",
    image: "pdf-images/page-14.jpg",
    summary: "A paediatric analgesic-antipyretic combination for pain and fever.",
    indications: ["Fever", "Headache", "Toothache", "Post-vaccination pain"],
  },
  {
    name: "Infacure Gel",
    category: "specialty",
    categoryLabel: "Pain care",
    composition: "Diclofenac diethylamine, methyl salicylate, linseed oil & menthol",
    form: "Topical gel",
    pack: "30 g",
    image: "pdf-images/page-15.jpg",
    summary: "Fast-absorbing topical relief for muscle, joint and back pain.",
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Sprains & strains", "Backache"],
  },
  {
    name: "Infacure-E",
    category: "specialty",
    categoryLabel: "Pain care",
    composition: "Etoricoxib 90 mg tablets",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-16.jpg",
    summary: "Targeted COX-2 support for painful inflammatory conditions.",
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Ankylosing spondylitis", "Acute gouty arthritis"],
  },
  {
    name: "LC-Cure",
    category: "specialty",
    categoryLabel: "Allergy care",
    composition: "Levocetirizine 5 mg + montelukast 10 mg",
    form: "Tablets",
    pack: "10 × 10 tablets",
    image: "pdf-images/page-17.jpg",
    summary: "Dual-action allergy support for nasal and skin symptoms.",
    indications: ["Allergic rhinitis", "Urticaria", "Skin allergies", "Allergy-associated bronchospasm"],
  },
  {
    name: "Movicure-LC",
    category: "wellness",
    categoryLabel: "Reproductive wellness",
    composition: "CoQ10, lycopene, L-glutathione, L-carnitine L-tartrate, EPA & DHA",
    form: "Tablets",
    pack: "3 × 10 tablets",
    image: "pdf-images/page-18.jpg",
    summary: "Antioxidant and nutritional support for reproductive outcomes.",
    indications: ["Female infertility", "Asthenozoospermia", "PCOS support", "Reproductive health"],
  },
  {
    name: "Faronee-200",
    category: "anti-infective",
    categoryLabel: "Anti-infective",
    composition: "Faropenem 200 mg tablets",
    form: "Tablets",
    pack: "10 × 6 tablets",
    image: "pdf-images/page-19.jpg",
    summary: "A next-generation beta-lactam antibiotic with broad-spectrum coverage.",
    indications: ["Respiratory tract infections", "ENT infections", "Urinary tract infections", "Typhoid fever"],
  },
  {
    name: "Loprameg",
    category: "specialty",
    categoryLabel: "Gastro care",
    composition: "Loperamide hydrochloride 2 mg capsules",
    form: "Capsules",
    pack: "10 × 10 capsules",
    image: "pdf-images/page-20.jpg",
    summary: "Symptomatic control for diarrhoea with patient comfort in mind.",
    indications: ["Acute diarrhoea", "Traveller’s diarrhoea", "Chronic diarrhoea", "Ileostomy output"],
  },
  {
    name: "Triamcort 40",
    category: "specialty",
    categoryLabel: "Specialty care",
    composition: "Triamcinolone acetonide injectable suspension",
    form: "Injection",
    pack: "1 ml",
    image: "pdf-images/page-21.jpg",
    summary: "Targeted corticosteroid therapy for inflammatory conditions.",
    indications: ["Osteoarthritis", "Arthritis", "Allergic skin conditions", "Bursitis & tendonitis"],
  },
  {
    name: "Polcure Tablets",
    category: "wellness",
    categoryLabel: "Bone health",
    composition: "Calcium carbonate, vitamin D3 & zinc sulphate tablets",
    form: "Tablets",
    pack: "3 × 10 tablets",
    image: "pdf-images/page-22.jpg",
    summary: "Calcium, vitamin D3 and zinc support for strong bones.",
    indications: ["Osteoporosis", "Calcium deficiency", "Bone & joint disorders", "Elderly convalescence"],
  },
  {
    name: "Pandif-DSR",
    category: "specialty",
    categoryLabel: "Gastro care",
    composition: "Pantoprazole 40 mg (SR) + domperidone 30 mg (SR)",
    form: "Capsules",
    pack: "10 × 10 capsules",
    image: "pdf-images/page-23.jpg",
    summary: "Dual-action acid suppression and gastric motility support.",
    indications: ["GERD / acid reflux", "Erosive esophagitis", "Gastritis", "Dyspepsia"],
  },
  {
    name: "Polcure Suspension",
    category: "wellness",
    categoryLabel: "Bone health",
    composition: "Calcium carbonate, magnesium, zinc & vitamin D3 suspension",
    form: "Suspension",
    pack: "200 ml",
    image: "pdf-images/page-24.jpg",
    summary: "Complete calcium and mineral nutrition for bones and active life.",
    indications: ["Osteoporosis", "Pregnancy & lactation", "Growth and development", "Elderly care"],
  },
  {
    name: "Vitofine-Z",
    category: "paediatric",
    categoryLabel: "Paediatric wellness",
    composition: "Multivitamin & multimineral syrup",
    form: "Sugar-free syrup",
    pack: "200 ml",
    image: "pdf-images/page-25.jpg",
    summary: "Everyday vitamin and mineral nutrition for growth and immunity.",
    indications: ["General weakness", "Poor appetite", "Nutritional deficiency", "Convalescence"],
  },
  {
    name: "Rosacure-R",
    category: "wellness",
    categoryLabel: "Joint wellness",
    composition: "Rosehip extract, mucopolysaccharide, collagen peptide, hyaluronate, chondroitin & vitamins",
    form: "Tablets",
    pack: "3 × 10 tablets",
    image: "pdf-images/page-26.jpg",
    summary: "A joint-care formula for cartilage support and mobility.",
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Joint pain", "Cartilage degeneration"],
  },
];

const grid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const modalBackdrop = document.querySelector("#modalBackdrop");
let activeFilter = "all";

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.category === activeFilter;
    const searchable = [product.name, product.categoryLabel, product.composition, product.summary, ...product.indications].join(" ").toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map((product) => `
    <article class="product-card" tabindex="0" data-product="${product.name}">
      <div class="product-image">
        <span class="product-tag">${product.categoryLabel}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
        <div class="product-footer">
          <span class="product-form">${product.form}</span>
          <span class="product-more">View details ↗</span>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.product));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openModal(card.dataset.product);
    });
  });
}

function openModal(name) {
  const product = products.find((item) => item.name === name);
  if (!product) return;
  document.querySelector("#modalImage").src = product.image;
  document.querySelector("#modalImage").alt = `${product.name} product information`;
  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalCategory").textContent = product.categoryLabel;
  document.querySelector("#modalComposition").textContent = product.composition;
  document.querySelector("#modalForm").textContent = product.form;
  document.querySelector("#modalPack").textContent = product.pack;
  document.querySelector("#modalIndications").innerHTML = product.indications.map((item) => `<span>${item}</span>`).join("");
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#modalClose").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".filter-tab.active").classList.remove("active");
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
document.querySelector("#modalClose").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

renderProducts();
