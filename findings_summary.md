# Exploratory Data Analysis: Wage Progression by Field of Study

**Dataset:** Graduate Career Tracking Survey (`KRI_GCTS_Dataset.csv`)  
**Notebook Reference:** [`EDA.ipynb`](file:///C:/Users/coder/OneDrive/Desktop/Graduate%20Career%20Tracking%20Survey/EDA.ipynb)  
**Sample Analyzed:** 7,984 respondents across 11 survey fields. The ranked progression sample is **2,112 paired respondents across 10 disciplines** after excluding **180 salary-inversion outliers** and **General Programmes** (insufficient sample).

---

## 1. Executive Summary

This study analyzes the career wage progression of Malaysian tertiary graduates, tracking salary movement from **first job (`salary_fj`)** to **current job (`salary_cj`)** across 10 ranked disciplines.

### Key Takeaways
1. **Top Growth Champions (ICT & Engineering):**
   - **Information and Communication Technologies (ICT)** recorded the highest wage progression, rising from an average first salary of **RM 1,925** to **RM 4,584** (**+RM 2,659**, **+167.6%**).
   - **Engineering, Manufacturing & Construction** ranked second, climbing from **RM 2,067** to **RM 4,453** (**+RM 2,386**, **+143.7%**).
2. **The Tech & Professional Trajectory (Senior Cohort ~2010):**
   - For senior graduates (~10–12 years post-graduation), ICT graduates attained the highest average current salary at **RM 5,375**, with a cleaned paired wage gain of **+RM 3,533**. Engineering followed at **RM 4,929**, with a gain of **+RM 3,138**.
3. **The STEM Wage Premium:**
   - STEM graduates recorded an average wage gain of **+RM 2,293 (+142.3%)**, compared with **+RM 1,804 (+125.2%)** for Non-STEM graduates — a **27.1% larger absolute gain**. The starting gap was RM 164, widening to RM 654 at current pay.
4. **Lowest Mobility: Services, Agriculture, and Arts:**
   - **Services** (+RM 1,207, +87.1%), **Agriculture** (+RM 1,255, +81.8%), and **Arts & Humanities** (+RM 1,318, +105.3%) recorded the weakest absolute wage gains. In the all-valid cross-section, their current salaries remain clustered near RM 3,000 (RM 2,939–RM 3,031).
5. **Education Level Multiplier:**
   - Bachelor’s degree holders earn a **36.5% premium** over Diploma holders (RM 4,268 vs RM 3,126), while Master’s and professional certificate holders reach **RM 5,674** (+32.9% over Bachelor’s).

---

## 2. Methodology & Data Preparation

- **Midpoint Imputation:** Survey salary ranges were mapped to representative numeric midpoints:
  - *Current Job (`salary_cj`):* Ranging from `Below RM 1,500` (RM 1,250) to `Above RM 15,000` (RM 17,500).
  - *First Job (`salary_fj`):* Ranging from `RM 1,000 and below` (RM 750) to `Above RM 10,000` (RM 12,500).
- **Missing Value Handling:** Missing / not-applicable survey codes (`99.0`) were converted to `NaN` and excluded from calculations.
- **Data Filtering:** 42 records coded as `Field unknown` (and `99.0` in detailed study fields) were removed to focus solely on validated academic disciplines.
- **Salary-Inversion Outlier Exclusion:** Among the 2,296 paired respondents with both first and current salaries, **180 records (7.8%) reported a current salary below their first salary**. These salary inversions were treated as reporting inconsistencies and excluded from progression analysis. Exclusions by field: Engineering 38, Natural Sciences 37, Business & Law 31, Arts & Humanities 20, Agriculture 12, Health & Welfare 10, Social Sci & Journalism 10, Education 8, Services 7, ICT 4, General Programmes 3.
- **Small-Sample Exclusion:** **General Programmes** was excluded from ranked comparisons. It has only 45 respondents overall, 7 paired before cleaning and 4 after cleaning; its cleaned paired mean (+RM 188, +12.5%) is not treated as a reliable category estimate.
- **Progression Metric:** Paired analysis was conducted on the **2,112** respondents in the 10 ranked fields:
  $$\text{Wage Progression (RM)} = \text{Current Salary Midpoint} - \text{First Salary Midpoint}$$
  $$\text{Wage Growth (\%)} = \frac{\text{Wage Progression}}{\text{First Salary Midpoint}} \times 100$$
  - The reported **Growth (%)** is the mean of individual growth rates, not the ratio of mean salaries.
- **Cross-Sectional Sections:** Salary-distribution summaries in Section 4 and the education table in Section 6 use all valid responses — **n = 4,800** for current salary and **n = 4,467** for first-job salary — because the outlier rule is specific to paired wage progression. Cross-sectional means remain sensitive to top-coded survey bands.

---

## 3. Comprehensive Wage Progression Rankings

The table below summarizes paired respondents who reported both starting and current salaries, sorted by **Absolute Wage Growth (RM)**:

| Rank | Field of Study | Sample ($n$) | First Job Mean (RM) | Current Job Mean (RM) | Mean Growth (RM) | Growth (%) | Median Growth (RM) |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | **ICT** | 167 | 1,925 | 4,584 | **+2,659** | **+167.6%** | +1,750 |
| **2** | **Engineering** | 511 | 2,067 | 4,453 | **+2,386** | **+143.7%** | +1,750 |
| **3** | **Social Sci & Journalism** | 128 | 1,812 | 3,941 | **+2,129** | **+142.2%** | +1,750 |
| **4** | **Business & Law** | 500 | 1,904 | 3,981 | **+2,078** | **+137.6%** | +1,000 |
| **5** | **Natural Sciences** | 259 | 1,963 | 4,023 | **+2,060** | **+138.7%** | +1,000 |
| **6** | **Health & Welfare** | 131 | 2,198 | 4,153 | **+1,954** | **+114.0%** | +1,000 |
| **7** | **Education** | 90 | 1,828 | 3,564 | **+1,736** | **+138.3%** | +1,000 |
| **8** | **Arts & Humanities** | 159 | 1,780 | 3,097 | **+1,318** | **+105.3%** | +1,000 |
| **9** | **Agriculture** | 46 | 2,158 | 3,413 | **+1,255** | **+81.8%** | +1,000 |
| **10** | **Services** | 121 | 1,895 | 3,101 | **+1,207** | **+87.1%** | +1,000 |

*\*General Programmes is excluded from the ranking (45 respondents overall; 4 paired after outlier cleaning). All 10 ranked fields show positive absolute and percentage wage growth.*

---

## 4. Cross-Sectional Salary Overview (All Valid Responses)

Looking at all respondents reporting current job salary ($n = 4,800$) and first job salary ($n = 4,467$):

### Current Salary Distribution
- **Highest Earning Fields:**
  1. ICT: **RM 4,395** (Median: RM 3,500, Std: RM 3,110)
  2. Health & Welfare: **RM 4,247** (Median: RM 3,500, Std: RM 2,787)
  3. Engineering: **RM 4,125** (Median: RM 3,500, Std: RM 2,752)
- **Lowest Earning Fields:**
  1. Arts & Humanities: **RM 2,939** (Median: RM 2,500, Std: RM 1,631)
  2. Agriculture: **RM 2,955** (Median: RM 2,500, Std: RM 1,411)
  3. Services: **RM 3,031** (Median: RM 2,500, Std: RM 1,700)
- **Wage Gap:** A **RM 1,456/month gap (49.5%)** separates ICT from Arts & Humanities graduates.

### Starting Salary Distribution
- **Mean Starting Pay:** Services (RM 2,673), Health & Welfare (RM 2,244), and Engineering (RM 2,088).
  - *Caveat:* The Services mean is inflated by top-coded responses — 24 respondents reported first-job pay `Above RM 10,000`, while the median starting salary in Services is RM 1,500. Cross-sectional first-job means are descriptive and are not used to rank wage progression.
- **Lowest Mean Starting Pay:** Arts & Humanities (RM 1,797), Business & Law (RM 1,814), and Education (RM 1,820).

---

## 5. Cohort Analysis: Career Experience & Trajectory

Comparing the **~2010 cohort** (approx. 10–12 years in the workforce) vs. the **~2018 cohort** (approx. 4–5 years in the workforce) illuminates how salaries evolve over time. Current-salary columns use all valid responses; wage-growth columns use the cleaned paired sample.

| Field of Study | Current Salary: ~2010 (RM) | Current Salary: ~2018 (RM) | Wage Growth: ~2010 (RM) | Wage Growth: ~2018 (RM) | Cohort Experience Premium (RM) |
|:---|:---:|:---:|:---:|:---:|:---:|
| **ICT** | **5,375.0** | 3,444.6 | **+3,532.8** | +1,386.0 | **+1,930.4** |
| **Engineering** | **4,928.7** | 3,418.4 | **+3,138.4** | +1,595.4 | **+1,510.3** |
| **Health & Welfare** | **4,794.4** | 3,614.9 | **+2,099.2** | +1,819.9 | **+1,179.5** |
| **Natural Sciences** | **4,408.6** | 3,099.2 | **+2,835.3** | +1,290.4 | **+1,309.4** |
| **Business & Law** | **4,299.8** | 3,235.3 | **+2,641.6** | +1,517.9 | **+1,064.5** |
| **Education** | **4,279.1** | 3,114.7 | **+2,183.3** | +1,288.9 | **+1,164.4** |
| **Social Sci & Journalism** | **4,264.6** | 3,092.2 | **+2,617.1** | +1,341.8 | **+1,172.4** |
| **Agriculture** | **3,347.0** | 2,516.7 | **+1,530.0** | +928.6 | **+830.3** |
| **Arts & Humanities** | **3,128.7** | 2,758.3 | **+1,531.2** | +1,101.3 | **+370.4** |
| **Services** | **3,045.0** | 3,013.6 | **+1,099.3** | +1,369.8 | **+31.4** |

### Cohort Insights
- **Steepest Trajectories:** ICT and Engineering widen their lead substantially over time. While ~2018 ICT graduates earn **RM 3,445**, senior ~2010 graduates reach **RM 5,375** (a **56.0% experience gain**). ICT's cleaned paired wage gain is **+RM 3,533** for the ~2010 cohort versus **+RM 1,386** for ~2018.
- **Plateauing Fields:** Services graduates in the ~2010 cohort average **RM 3,045**, virtually unchanged from ~2018 graduates at **RM 3,014** (an experience gain of just **RM 31.4**), demonstrating a persistent long-term ceiling.

---

## 6. Macro Drivers: STEM & Educational Attainment

### STEM vs. Non-STEM Progression
Across paired respondents in the cleaned sample:
- **STEM ($n = 1,070$):**
  - First Job: **RM 2,038** $\rightarrow$ Current Job: **RM 4,332**
  - Mean Wage Growth: **+RM 2,293 (+142.3%)**
- **Non-STEM ($n = 1,042$):**
  - First Job: **RM 1,874** $\rightarrow$ Current Job: **RM 3,678**
  - Mean Wage Growth: **+RM 1,804 (+125.2%)**
- **The Divergence:** Starting salaries differ by only **RM 164**, but the current wage gap widens to **RM 654**. STEM graduates’ absolute gain is **27.1% larger** than Non-STEM graduates’.

### Educational Qualification Impact
Current salaries categorized by highest educational certificate attained (all valid responses):

| Qualification Level | Sample ($n$) | Mean Salary (RM) | Median Salary (RM) | Premium over Prior Tier |
|:---|:---:|:---:|:---:|:---:|
| **Diploma / Certificates** | 2,201 | 3,126 | 2,500 | Baseline |
| **Bachelor's Degree / Adv. Diploma** | 2,420 | 4,268 | 3,500 | **+36.5%** (+RM 1,142) |
| **Master's Degree / Professional Cert** | 128 | 5,674 | 4,500 | **+32.9%** (+RM 1,406) |
| **PhD or equivalent** | 51 | 4,926 | 3,500 | -13.2% (-RM 748)* |

*\*Note: Master's and professional certificate holders often operate in private corporate leadership roles, whereas PhD holders are predominantly situated in academic or public research tracks with structured civil-service pay bands.*

---

## 7. Strategic Conclusions & Policy Implications

1. **Digital & High-Tech Premium:**  
   ICT and Engineering yield both superior salary ceilings and accelerating wage trajectories — ICT **+167.6%** and Engineering **+143.7%** in the cleaned paired sample. Policy interventions incentivizing STEM enrollment align with proven market rewards.
2. **Early-Career vs Mid-Career Disconnect in Non-Technical Disciplines:**  
   Social Sciences, Journalism, Business, and Law start at relatively modest levels (~RM 1,800–RM 1,900), but demonstrate strong mid-career recovery, breaking RM 4,200+ by the senior cohort.
3. **Addressing the Services, Agriculture & Arts Wage Trap:**
   These fields remain at the bottom of the current-pay distribution (RM 2,939–RM 3,031) and post the weakest absolute gains in the cleaned paired sample (+RM 1,207–1,318). Services has the lowest absolute growth (+RM 1,207, +87.1%), while Agriculture has the lowest percentage growth (+81.8%). Upskilling, technical adjacencies, and higher-value services training are required to lift career ceilings in these sectors.

---

## 8. Data Quality & Limitations

- Salary values are survey bands converted to midpoints, so means are approximations rather than exact payroll figures.
- The cross-sectional first-job mean is sensitive to top-coded bands (for example, Services includes 24 `Above RM 10,000` responses; its median is RM 1,500).
- The 180 excluded salary-inversion records may include a small number of genuine pay cuts (career changes, part-time work), so the cleaned progression estimates are best interpreted as typical upward wage trajectories rather than a full accounting of every individual outcome.
- General Programmes is retained in the raw dataset and cross-sectional counts but excluded from ranked comparisons because its paired sample is too small for a reliable category mean.
