// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.eattolivenottodie.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.eattolivenottodie.com/","title_tag":"Herbal Tea & Daily Herbs for Optimal Health | Eat To Live Not To Die","meta_description":"Discover herbal tea, daily herbs and health supplements for optimal health, gut health, bone health and energy boost with eco-friendly blends from London herbal experts."},{"page_url":"https://www.eattolivenottodie.com/shop","title_tag":"Herbal Tea & Health Supplements Shop | Eat To Live Not To Die","meta_description":"Shop herbal tea, iron tea, daily herbs and natural health supplements for gut health, bone health, teeth health, lung health and an energy boost from London herbal specialists."},{"page_url":"https://www.eattolivenottodie.com/youtube","title_tag":"Herbal Tea & Optimal Health Videos | Eat To Live Not To Die","meta_description":"Watch London herbal guidance on herbal tea, daily herbs, gut health, bone health and optimal health tips, plus natural energy boost and eco-friendly lifestyle videos."},{"page_url":"https://www.eattolivenottodie.com/book-online","title_tag":"Optimal Health Herbal Consultation Online | Eat To Live Not To Die","meta_description":"Book an alkaline nutrition consultation for optimal health, gut health, bone health, energy boost and natural health supplements support with London herbal specialists."},{"page_url":"https://www.eattolivenottodie.com/contact-us","title_tag":"Contact London Herbal Health Team | Eat To Live Not To Die","meta_description":"Contact our London herbal team about herbal tea, daily herbs, iron tea, health supplements, gut health, bone health, energy boost and eco-friendly wellness support."},{"page_url":"https://www.eattolivenottodie.com/about-us","title_tag":"London Herbal Optimal Health Lifestyle | Eat To Live Not To Die","meta_description":"Learn about our London herbal mission promoting herbal tea, daily herbs, gut health, bone health, eco-friendly choices and optimal health as a lifestyle, not a diet."},{"page_url":"https://www.eattolivenottodie.com/blog","title_tag":"Herbal Tea & Gut Health Tips Blog | Eat To Live Not To Die","meta_description":"Read herbal tea, daily herbs, gut health, bone health and optimal health articles with practical tips on natural health supplements, energy boost and eco-friendly living."},{"page_url":"https://www.eattolivenottodie.com/wholesale","title_tag":"Wholesale Herbal Tea & Supplements London | Eat To Live Not To Die","meta_description":"Enquire about London herbal wholesale for herbal tea, iron tea, daily herbs and health supplements focused on gut health, bone health, energy boost and eco-friendly stock."},{"page_url":"https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea","title_tag":"Iron Tea for Energy & Optimal Health | Eat To Live Not To Die","meta_description":"Iron tea loose leaf blend for optimal health, energy boost, bone health and natural minerals. London herbal iron tea supports gut health with potent daily herbs."}],"keywords":["herbal tea","optimal health","daily herbs","iron tea","gut health","bone health","energy boost","eco-friendly","health supplements","london herbal"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.eattolivenottodie.com/#organization",
  "name": "Eat To Live Not To Die",
  "url": "https://www.eattolivenottodie.com/",
  "logo": "https://static.wixstatic.com/media/82ab3c_5333034b2dcd4e80803ac6162830c496.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/82ab3c_5333034b2dcd4e80803ac6162830c496.jpg",
  "image": [
    "https://static.wixstatic.com/media/82ab3c_5333034b2dcd4e80803ac6162830c496.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/82ab3c_5333034b2dcd4e80803ac6162830c496.jpg",
    "https://static.wixstatic.com/media/753286_2e1d622bd0bf4b87b83de375f49e6f67~mv2.png/v1/fill/w_158,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eat%20to%20live%20logo%20white%20png.png",
    "https://static.wixstatic.com/media/753286_c3d72d6b209f4ee681d258e3d8b2fecb~mv2.png/v1/fill/w_121,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eat%20to%20live%20logo%20black%20png.png"
  ],
  "description": "Eat To Live Not To Die is a UK-based community interest company and herbal tea brand promoting an alkaline lifestyle, offering herbal teas, e-books, consultations, and educational content for optimal health.",
  "founder": {
    "@type": "Person",
    "name": "Ekong by Mutulu"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44-203-633-8865",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "en"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kiosk 5 Brixton Pillars, Atlantic Road",
    "addressLocality": "London",
    "postalCode": "SW9 8HX",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.instagram.com/eattolivenottodie",
    "https://www.facebook.com/eattolivenottodie",
    "https://twitter.com/eattolivenotdie",
    "https://www.youtube.com/@eattolivenottodie"
  ],
  "department": [
    {
      "@type": "Store",
      "@id": "https://www.eattolivenottodie.com/shop#store",
      "name": "Eat To Live Not To Die Shop",
      "image": "https://static.wixstatic.com/media/82ab3c_069691f6f4544e80a0dfe8ab71e57119%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/82ab3c_069691f6f4544e80a0dfe8ab71e57119%7Emv2.jpg",
      "url": "https://www.eattolivenottodie.com/shop",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kiosk 5 Brixton Pillars, Atlantic Road",
        "addressLocality": "London",
        "postalCode": "SW9 8HX",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.eattolivenottodie.com/book-online#service",
      "name": "Alkaline Nutrition Interactive Consultation",
      "url": "https://www.eattolivenottodie.com/book-online",
      "description": "50-minute interactive consultation on alkaline nutrition and lifestyle topics such as fasting, weight loss, diabetes management, mental wellness, dietary plans, and more.",
      "provider": {
        "@id": "https://www.eattolivenottodie.com/#organization"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Eat To Live Not To Die Products",
    "url": "https://www.eattolivenottodie.com/shop",
    "itemListElement": [
      {
        "@type": "Product",
        "@id": "https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea",
        "name": "IRON FLUORINE LOOSE LEAF TEA®",
        "description": "Potent herbal loose leaf tea blend formulated to provide energy and minerals, featuring herbs such as Sarsaparilla, Elderberry, Blue Vervain, Yellow Dock, Burdock, Chaparral, and Kalawalla.",
        "image": [
          "https://static.wixstatic.com/media/753286_05c06d38533b44f59120a681e88f7493~mv2.jpg/v1/fill/w_312,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/(E-BOOK)%20HIDDEN%20FACTS%20ON%20HEALTH%20%26%20NUTRITION%202.jpg"
        ],
        "brand": {
          "@type": "Brand",
          "name": "Eat To Live Not To Die"
        },
        "sku": "005",
        "offers": {
          "@type": "Offer",
          "price": "40.00",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/OutOfStock",
          "url": "https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": 5
        }
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Alkaline Nutrition Interactive Consultation"
      },
      "price": "155.00",
      "priceCurrency": "GBP",
      "url": "https://www.eattolivenottodie.com/book-online"
    }
  ],
  "knowsAbout": [
    "alkaline lifestyle",
    "herbal tea",
    "gut health",
    "bone health",
    "teeth health",
    "lung health",
    "energy support",
    "fasting",
    "weight loss",
    "sports nutrition",
    "skin health",
    "mental wellness",
    "diabetes management",
    "cholesterol reduction"
  ],
  "foundingDate": "2015",
  "legalName": "Eat To Live Not To Die Community Interest Company",
  "identifier": {
    "@type": "PropertyValue",
    "name": "Company Registration Number",
    "value": "09859899"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
