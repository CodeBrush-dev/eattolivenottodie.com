// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.eattolivenottodie.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.eattolivenottodie.com/","title_tag":"Herbal Tea & Optimal Health | Eat To Live Not To Die","meta_description":"Discover herbal tea, daily herbs and natural health supplements for energy, gut health and bone health. Eat To Live Not To Die supports your optimal health."},{"page_url":"https://www.eattolivenottodie.com/shop","title_tag":"Herbal Tea & Health Supplements | Eat To Live Not To Die","meta_description":"Shop herbal tea, iron tea, daily herbs and health supplements for energy, gut health, bone health and more. London herbal specialists helping you live well."},{"page_url":"https://www.eattolivenottodie.com/youtube","title_tag":"Herbal Tea & Gut Health Tips | Eat To Live Not To Die","meta_description":"Watch alkaline nutrition videos on herbal tea, gut health, bone health, energy boost and optimal health. Learn daily herbs routines with Eat To Live Not To Die."},{"page_url":"https://www.eattolivenottodie.com/book-online","title_tag":"Optimal Health Consultation | Eat To Live Not To Die","meta_description":"Book an alkaline nutrition consultation for optimal health, weight loss, gut health, bone health and energy boost. Guided by London herbal lifestyle experts."},{"page_url":"https://www.eattolivenottodie.com/contact-us","title_tag":"Contact London Herbal Team | Eat To Live Not To Die","meta_description":"Contact our London herbal team about herbal tea, daily herbs, gut health and energy support. Visit our HQ or reach out online for optimal health guidance."},{"page_url":"https://www.eattolivenottodie.com/about-us","title_tag":"Herbal Optimal Health Vision | Eat To Live Not To Die","meta_description":"Learn about Ekong by Mutulu and the Eat To Live Not To Die mission. Discover the alkaline, eco-friendly, herbal path to optimal health and self-love."},{"page_url":"https://www.eattolivenottodie.com/blog","title_tag":"Daily Herbs & Gut Health Blog | Eat To Live Not To Die","meta_description":"Read tips on daily herbs, herbal tea, gut health, bone health, energy boost and eco-friendly living. Learn to eat to live for lasting optimal health."},{"page_url":"https://www.eattolivenottodie.com/wholesale","title_tag":"Wholesale Herbal Tea & Supplements | Eat To Live Not To Die","meta_description":"Enquire about wholesale herbal tea, iron tea and health supplements from a trusted London herbal brand. Support optimal health for your customers."},{"page_url":"https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea","title_tag":"Iron Tea for Energy Boost | Eat To Live Not To Die","meta_description":"Iron fluorine herbal tea rich in minerals for energy boost, bone health and overall optimal health. A powerful daily herbs blend from London herbal experts."}],"keywords":["herbal tea","optimal health","daily herbs","iron tea","gut health","bone health","energy boost","eco-friendly","health supplements","london herbal"]};

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
    "https://static.wixstatic.com/media/753286_2e1d622bd0bf4b87b83de375f49e6f67~mv2.png/v1/fill/w_158,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eat%20to%20live%20logo%20white%20png.png"
  ],
  "description": "Eat To Live Not To Die is a UK-based community interest company offering herbal teas, alkaline nutrition guidance, e-books and wellness consultations to support optimal health through an alkaline lifestyle.",
  "slogan": "IT'S A LIFESTYLE NOT A DIET",
  "telephone": "+44 203 633 8865",
  "email": "mailto:eattolivenottodie@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Ekong by Mutulu",
    "description": "Ekong by Mutulu is an author and alkaline lifestyle educator focused on self-love, natural health and nutrition."
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44 203 633 8865",
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
  "knowsAbout": [
    "alkaline lifestyle",
    "herbal tea",
    "alkaline nutrition",
    "gut health",
    "bone health",
    "teeth health",
    "lung health",
    "natural energy",
    "fasting",
    "weight loss",
    "children's health",
    "exercise guidance",
    "diabetes management",
    "high blood sugar",
    "mental wellness",
    "dietary plans",
    "sports nutrition",
    "cholesterol reduction",
    "skin health",
    "constipation",
    "fertility"
  ],
  "sameAs": [
    "https://www.instagram.com/eattolivenottodie",
    "https://www.facebook.com/eattolivenottodie",
    "https://twitter.com/eattolivenottodie",
    "https://www.youtube.com"
  ],
  "department": [
    {
      "@type": "WebPage",
      "@id": "https://www.eattolivenottodie.com/shop#webpage",
      "url": "https://www.eattolivenottodie.com/shop",
      "name": "Shop | Eat To Live Not To Die Herbal Tea",
      "description": "Online shop for herbal teas, alkaline products and e-books for energy, gut health, bone health, teeth health and lung health."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.eattolivenottodie.com/book-online#webpage",
      "url": "https://www.eattolivenottodie.com/book-online",
      "name": "Consultation | Book A Call | Eat To Live Not To Die",
      "description": "Book an alkaline nutrition interactive consultation and other wellness-related services."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.eattolivenottodie.com/youtube#webpage",
      "url": "https://www.eattolivenottodie.com/youtube",
      "name": "YouTube | Eat To Live Not To Die",
      "description": "Video content on alkaline eating, tips, tricks, how-to guides, lectures and recipes."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.eattolivenottodie.com/blog#webpage",
      "url": "https://www.eattolivenottodie.com/blog",
      "name": "Blog | Eat To Live Not To Die Herbal Teas",
      "description": "Blog articles on how to use products, alkaline lifestyle tips and recommended places to shop."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Herbal Teas and E-Books",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "IRON FLUORINE LOOSE LEAF TEA\u00ae",
        "url": "https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea",
        "description": "A potent herbal tea blend formulated to provide energy and minerals, featuring ingredients such as Sarsaparilla, Elderberry, Blue Vervain, Yellow Dock, Burdock, Chaparral and Kalawalla.",
        "sku": "005",
        "brand": {
          "@type": "Brand",
          "name": "Eat To Live Not To Die"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "40.00",
          "availability": "https://schema.org/OutOfStock",
          "url": "https://www.eattolivenottodie.com/product-page/iron-fluorine-loose-leaf-tea"
        }
      },
      {
        "@type": "Product",
        "name": "(E-BOOK) HIDDEN FACTS ON HEALTH & NUTRITION 2",
        "url": "https://www.eattolivenottodie.com/",
        "image": "https://static.wixstatic.com/media/753286_05c06d38533b44f59120a681e88f7493~mv2.jpg/v1/fill/w_312,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/(E-BOOK)%20HIDDEN%20FACTS%20ON%20HEALTH%20%26%20NUTRITION%202.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "30.00",
          "availability": "https://schema.org/InStock",
          "url": "https://www.eattolivenottodie.com/"
        }
      },
      {
        "@type": "Product",
        "name": "(E-BOOK) THE REMEDY BOOK",
        "url": "https://www.eattolivenottodie.com/",
        "image": "https://static.wixstatic.com/media/82ab3c_0516048977df4ec2b34ac3916192ce36~mv2.jpg/v1/fill/w_312,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/REMEDY%20BOOK.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "35.00",
          "availability": "https://schema.org/InStock",
          "url": "https://www.eattolivenottodie.com/"
        }
      },
      {
        "@type": "Product",
        "name": "(E-BOOK) COOK WITH MUTULU",
        "url": "https://www.eattolivenottodie.com/",
        "image": "https://static.wixstatic.com/media/753286_35f12c2a03a94521871cc987b31fd457~mv2.jpg/v1/fill/w_312,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/(E-BOOK)%20COOK%20WITH%20MUTULU_edited.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "20.00",
          "availability": "https://schema.org/InStock",
          "url": "https://www.eattolivenottodie.com/"
        }
      }
    ]
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
