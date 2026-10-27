/* Graduate Career Tracking Survey — cleaned paired progression data.
   Source: EDA.ipynb (salary bands mapped to midpoints; 180 salary-inversion records excluded;
   General Programmes excluded from rankings). Values are means from the cleaned paired sample
   unless a label says otherwise. */
(function () {
  "use strict";

  var fields = [
    { name: "ICT", short: "ICT", n: 167, first: 1925.1497, current: 4583.8323, gain: 2658.6826, growth: 167.6200, median: 1750, cohort2010: 5375.0000, cohort2018: 3444.6108, cohortGain2010: 3532.8283, cohortGain2018: 1386.0294 },
    { name: "Engineering", short: "Engineering", n: 511, first: 2066.5362, current: 4453.0333, gain: 2386.4971, growth: 143.6871, median: 1750, cohort2010: 4928.7091, cohort2018: 3418.3587, cohortGain2010: 3138.3588, cohortGain2018: 1595.3815 },
    { name: "Social Sci & Journalism", short: "Social Sci", n: 128, first: 1812.5000, current: 3941.4062, gain: 2128.9062, growth: 142.2259, median: 1750, cohort2010: 4264.5985, cohort2018: 3092.2330, cohortGain2010: 2617.0886, cohortGain2018: 1341.8367 },
    { name: "Business & Law", short: "Business", n: 500, first: 1903.5000, current: 3981.0000, gain: 2077.5000, growth: 137.5749, median: 1000, cohort2010: 4299.7812, cohort2018: 3235.2652, cohortGain2010: 2641.5663, cohortGain2018: 1517.9283 },
    { name: "Natural Sciences", short: "Natural Sci", n: 259, first: 1963.3205, current: 4023.1660, gain: 2059.8456, growth: 138.7283, median: 1000, cohort2010: 4408.5570, cohort2018: 3099.2424, cohortGain2010: 2835.2713, cohortGain2018: 1290.3846 },
    { name: "Health & Welfare", short: "Health", n: 131, first: 2198.4733, current: 4152.6718, gain: 1954.1985, growth: 114.0434, median: 1000, cohort2010: 4794.3925, cohort2018: 3614.8649, cohortGain2010: 2099.2063, cohortGain2018: 1819.8529 },
    { name: "Education", short: "Education", n: 90, first: 1827.7778, current: 3563.8889, gain: 1736.1111, growth: 138.3404, median: 1000, cohort2010: 4279.0698, cohort2018: 3114.7260, cohortGain2010: 2183.3333, cohortGain2018: 1288.8889 },
    { name: "Arts & Humanities", short: "Arts", n: 159, first: 1779.8742, current: 3097.4843, gain: 1317.6101, growth: 105.2830, median: 1000, cohort2010: 3128.7129, cohort2018: 2758.2938, cohortGain2010: 1531.2500, cohortGain2018: 1101.2658 },
    { name: "Agriculture", short: "Agriculture", n: 46, first: 2157.6087, current: 3413.0435, gain: 1255.4348, growth: 81.8392, median: 1000, cohort2010: 3347.0149, cohort2018: 2516.6667, cohortGain2010: 1530.0000, cohortGain2018: 928.5714 },
    { name: "Services", short: "Services", n: 121, first: 1894.6281, current: 3101.2397, gain: 1206.6116, growth: 87.0799, median: 1000, cohort2010: 3044.9640, cohort2018: 3013.6364, cohortGain2010: 1099.3151, cohortGain2018: 1369.7917 }
  ];

  fields.sort(function (a, b) { return b.gain - a.gain; });
  fields.forEach(function (f, i) { f.rank = i + 1; f.premium = f.cohort2010 - f.cohort2018; });

  var stem = [
    { name: "STEM", n: 1070, first: 2038.3178, current: 4331.7757, gain: 2293.4579, growth: 142.3451 },
    { name: "Non-STEM", n: 1042, first: 1874.0403, current: 3678.0230, gain: 1803.9827, growth: 125.2035 }
  ];

  var education = [
    { name: "Diploma / certificates", short: "Diploma", n: 2201, mean: 3125.5111, median: 2500, premiumPct: null, premiumRm: null },
    { name: "Bachelor's / advanced diploma", short: "Bachelor's", n: 2420, mean: 4267.6653, median: 3500, premiumPct: 36.5, premiumRm: 1142 },
    { name: "Master's / professional", short: "Master's", n: 128, mean: 5673.8281, median: 4500, premiumPct: 32.9, premiumRm: 1406 },
    { name: "PhD or equivalent", short: "PhD", n: 51, mean: 4926.4706, median: 3500, premiumPct: -13.2, premiumRm: -748 }
  ];

  var exclusions = [
    { field: "Engineering", n: 38 },
    { field: "Natural Sciences", n: 37 },
    { field: "Business & Law", n: 31 },
    { field: "Arts & Humanities", n: 20 },
    { field: "Agriculture", n: 12 },
    { field: "Health & Welfare", n: 10 },
    { field: "Social Sci & Journalism", n: 10 },
    { field: "Education", n: 8 },
    { field: "Services", n: 7 },
    { field: "ICT", n: 4 },
    { field: "General", n: 3 }
  ];

  var meta = {
    title: "Graduate Career Tracking Survey",
    reportDate: "October 2026",
    sample: 2112,
    fieldsRanked: 10,
    paired: 2296,
    inversions: 180,
    inversionRate: 7.8397,
    generalOverall: 45,
    generalPaired: 4,
    crossCurrent: 4800,
    crossFirst: 4467,
    totalRespondents: 7984,
    totalRows: 8026
  };

  var intFmt = new Intl.NumberFormat("en-MY", { maximumFractionDigits: 0 });
  var oneFmt = new Intl.NumberFormat("en-MY", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  var sign = function (v) { return v > 0 ? "+" : v < 0 ? "\u2212" : ""; };

  // Whole-ringgit display uses half-to-even rounding to agree with the notebook's
  // pandas output (a 1812.5 mean shows as 1,812, not 1,813).
  var roundEven = function (v) {
    var base = Math.floor(v);
    var part = v - base;
    if (part > 0.5) return base + 1;
    if (part < 0.5) return base;
    return base % 2 === 0 ? base : base + 1;
  };

  var fmt = {
    int: function (v) { return intFmt.format(roundEven(v)); },
    one: function (v) { return oneFmt.format(v); },
    money: function (v) { return "RM " + intFmt.format(roundEven(v)); },
    money1: function (v) { return "RM " + oneFmt.format(v); },
    signedInt: function (v) { return sign(v) + intFmt.format(roundEven(Math.abs(v))); },
    signedMoney: function (v) { return v === 0 ? "RM 0" : sign(v) + "RM " + intFmt.format(roundEven(Math.abs(v))); },
    signedMoney1: function (v) { return v === 0 ? "RM 0" : sign(v) + "RM " + oneFmt.format(Math.abs(v)); },
    pct: function (v) { return sign(v) + oneFmt.format(Math.abs(v)) + "%"; }
  };

  var firsts = fields.map(function (f) { return f.first; });
  var currents = fields.map(function (f) { return f.current; });
  var spread = {
    first: Math.max.apply(null, firsts) - Math.min.apply(null, firsts),
    current: Math.max.apply(null, currents) - Math.min.apply(null, currents)
  };

  var sumN = fields.reduce(function (s, f) { return s + f.n; }, 0);
  var sumExcluded = exclusions.reduce(function (s, e) { return s + e.n; }, 0);
  var sumStem = stem.reduce(function (s, r) { return s + r.n; }, 0);
  var sumEducation = education.reduce(function (s, e) { return s + e.n; }, 0);
  var ict = fields.filter(function (f) { return f.name === "ICT"; })[0];
  var services = fields.filter(function (f) { return f.name === "Services"; })[0];

  console.assert(fields.length === 10, "Expected 10 ranked fields");
  console.assert(sumN === meta.sample, "Field sample sizes should total 2,112");
  console.assert(sumStem === meta.sample, "STEM and Non-STEM should total 2,112");
  console.assert(sumEducation === meta.crossCurrent, "Education rows should total 4,800");
  console.assert(sumExcluded === meta.inversions, "Exclusion rows should total 180");
  console.assert(fields.every(function (f) { return f.gain > 0 && f.growth > 0; }), "Every ranked field should show positive progression");
  console.assert(fields.every(function (f) { return Math.abs(f.gain - (f.current - f.first)) < 0.01; }), "Field gain should equal current minus first before rounding");
  console.assert(fields.every(function (f, i) { return i === 0 || fields[i - 1].gain >= f.gain; }), "Fields should be sorted by mean gain");
  console.assert(Math.round(ict.gain) === 2659 && Math.round(services.gain) === 1207, "Top and bottom gains should match the report");
  console.assert(Math.abs(ict.premium - 1930.4) < 0.1 && Math.abs(services.premium - 31.4) < 0.1, "Cohort premiums should match the report");
  console.assert(Math.round(spread.first) === 419 && Math.round(spread.current) === 1486, "First/current spread should match the closing note");
  console.assert(Math.round(stem[0].first - stem[1].first) === 164 && Math.round(stem[0].current - stem[1].current) === 654, "STEM gaps should match the report");
  console.assert(stem.every(function (r) { return Math.abs(r.gain - (r.current - r.first)) < 0.01; }), "STEM gains should equal current minus first before rounding");
  console.assert(education.every(function (e, i) { return i === 0 || e.premiumRm === Math.round(e.mean) - Math.round(education[i - 1].mean); }), "Education premiums should match the rounded means");
  console.assert(exclusions.every(function (e, i) { return i === 0 || exclusions[i - 1].n >= e.n; }), "Exclusions should be sorted by count");

  window.GCTS = {
    fields: fields,
    stem: stem,
    education: education,
    exclusions: exclusions,
    meta: meta,
    spread: spread,
    fmt: fmt
  };
})();
