# Exploratory Data Analysis: Wage Progression by Field of Study

**Dataset:** Graduate Career Tracking Survey (`KRI_GCTS_Dataset.csv`)  
**Notebook Reference:** [`EDA.ipynb`](file:///C:/Users/coder/OneDrive/Desktop/Graduate%20Career%20Tracking%20Survey/EDA.ipynb)  
**Sample Analyzed:** 7,984 respondents across 11 validated study fields (*Field unknown* excluded)  

---

## 1. Executive Summary

This study analyzes the career wage progression of Malaysian tertiary graduates, tracking salary movement from **first job (`salary_fj`)** to **current job (`salary_cj`)** across 11 disciplines.

### Key Takeaways
1. **Top Growth Champions (ICT & Engineering):**
   - **Information and Communication Technologies (ICT)** recorded the highest wage progression, surging from an average first salary of **RM 1,933** to **RM 4,513** (**+RM 2,580**, **+163.0%**).
   - **Engineering, Manufacturing & Construction** ranked second, climbing from **RM 2,169** to **RM 4,317** (**+RM 2,148**, **+131.9%**).
2. **The Tech & Professional Trajectory (Senior Cohort ~2010):**
   - For senior graduates (~10–12 years post-graduation), ICT graduates attained the highest average salary at **RM 5,375** (+RM 3,485 wage growth), followed closely by Engineering at **RM 4,929** (+RM 2,891 wage growth).
3. **The STEM Wage Premium:**
   - STEM graduates outpaced Non-STEM peers across all career stages. STEM graduates experienced an average wage growth of **RM 2,035 (+129.1%)** compared to **RM 1,565 (+112.5%)** for Non-STEM graduates—a **30.0% wage growth advantage**.
4. **Stagnation in Services, Humanities, and Agriculture:**
   - **Arts & Humanities** (+RM 1,071, +90.5%), **Services** (+RM 1,084, +80.8%), and **Agriculture** (+RM 780, +58.8%) exhibited the lowest wage mobility, with current salaries remaining near or below the RM 3,000 threshold.
5. **Education Level Multiplier:**
   - Bachelor’s degree holders earn a **36.5% premium** over Diploma holders (RM 4,268 vs RM 3,126), while Master’s and professional certificate holders reach **RM 5,674** (+32.9% over Bachelor’s).

---

## 2. Methodology & Data Preparation

- **Midpoint Imputation:** Survey salary ranges were mapped to representative numeric midpoints:
  - *Current Job (`salary_cj`):* Ranging from `Below RM 1,500` (RM 1,250) to `Above RM 15,000` (RM 17,500).
  - *First Job (`salary_fj`):* Ranging from `RM 1,000 and below` (RM 750) to `Above RM 10,000` (RM 12,500).
- **Missing Value Handling:** Missing / not-applicable survey codes (`99.0`) were converted to `NaN` and excluded from calculations.
- **Data Filtering:** 42 records coded as `Field unknown` (and `99.0` in detailed study fields) were removed to focus solely on validated academic disciplines.
- **Progression Metric:** Paired analysis was conducted on respondents who reported both first and current salaries ($n = 2,296$):
  $$\text{Wage Progression (RM)} = \text{Current Salary Midpoint} - \text{First Salary Midpoint}$$
  $$\text{Wage Growth (\%)} = \frac{\text{Wage Progression}}{\text{First Salary Midpoint}} \times 100$$

---

## 3. Comprehensive Wage Progression Rankings

The table below summarizes paired respondents who reported both starting and current salaries, sorted by **Absolute Wage Growth (RM)**:

| Rank | Field of Study | Sample ($n$) | First Job Mean (RM) | Current Job Mean (RM) | Mean Growth (RM) | Growth (%) | Median Growth (RM) |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | **ICT** | 171 | 1,933 | 4,513 | **+2,580** | **+163.0%** | +1,750 |
| **2** | **Engineering** | 549 | 2,169 | 4,317 | **+2,148** | **+131.9%** | +1,000 |
| **3** | **Business & Law** | 531 | 1,993 | 3,895 | **+1,903** | **+128.1%** | +1,000 |
| **4** | **Social Sci & Journalism** | 138 | 1,993 | 3,830 | **+1,837** | **+129.3%** | +1,000 |
| **5** | **Health & Welfare** | 141 | 2,312 | 4,028 | **+1,716** | **+103.6%** | +1,000 |
| **6** | **Natural Sciences** | 296 | 2,098 | 3,772 | **+1,674** | **+117.3%** | +1,000 |
| **7** | **Education** | 98 | 1,985 | 3,495 | **+1,510** | **+124.8%** | +1,000 |
| **8** | **Services** | 128 | 1,943 | 3,027 | **+1,084** | **+80.8%** | +1,000 |
| **9** | **Arts & Humanities** | 179 | 1,872 | 2,943 | **+1,071** | **+90.5%** | +1,000 |
| **10** | **Agriculture** | 58 | 2,315 | 3,095 | **+780** | **+58.8%** | +1,000 |
| **11** | **General Programmes** | 7 | 3,786 | 2,786 | **-1,000** | **-9.8%** | 0 |

---

## 4. Cross-Sectional Salary Overview (All Valid Responses)

Looking at all respondents reporting current job salary ($n = 4,797$) and first job salary ($n = 4,473$):

### Current Salary Distribution
- **Highest Earning Fields:**
  1. ICT: **RM 4,395** (Median: RM 3,500, Std: RM 3,110)
  2. Health & Welfare: **RM 4,248** (Median: RM 3,500, Std: RM 2,787)
  3. Engineering: **RM 4,125** (Median: RM 3,500, Std: RM 2,752)
- **Lowest Earning Fields:**
  1. Arts & Humanities: **RM 2,939** (Median: RM 2,500, Std: RM 1,631)
  2. Agriculture: **RM 2,955** (Median: RM 2,500, Std: RM 1,411)
  3. Services: **RM 3,031** (Median: RM 2,500, Std: RM 1,700)
- **Wage Gap:** A **RM 1,456/month gap (49.5%)** separates ICT from Arts & Humanities graduates.

### Starting Salary Distribution
- **Highest Initial Gateways:** Services (RM 2,673), Health & Welfare (RM 2,244), and Engineering (RM 2,088).
- **Lowest Starting Pay:** Arts & Humanities (RM 1,797), Business & Law (RM 1,814), and Education (RM 1,820).

---

## 5. Cohort Analysis: Career Experience & Trajectory

Comparing the **~2010 cohort** (approx. 10–12 years in the workforce) vs. the **~2018 cohort** (approx. 4–5 years in the workforce) illuminates how salaries evolve over time:

| Field of Study | Current Salary: ~2010 (RM) | Current Salary: ~2018 (RM) | Wage Growth: ~2010 (RM) | Wage Growth: ~2018 (RM) | Cohort Experience Premium (RM) |
|:---|:---:|:---:|:---:|:---:|:---:|
| **ICT** | **5,375.0** | 3,444.6 | **+3,485.0** | +1,306.3 | **+1,930.4** |
| **Engineering** | **4,928.7** | 3,418.4 | **+2,891.2** | +1,385.6 | **+1,510.3** |
| **Health & Welfare** | **4,794.4** | 3,614.9 | **+1,882.6** | +1,570.0 | **+1,179.5** |
| **Natural Sciences** | **4,408.6** | 3,099.2 | **+2,491.2** | +920.5 | **+1,309.4** |
| **Business & Law** | **4,299.8** | 3,235.3 | **+2,473.1** | +1,355.2 | **+1,064.5** |
| **Education** | **4,279.1** | 3,114.7 | **+1,903.1** | +1,117.3 | **+1,164.4** |
| **Social Sci & Journalism** | **4,264.6** | 3,092.2 | **+2,469.5** | +910.7 | **+1,172.4** |
| **Agriculture** | **3,347.0** | 2,516.7 | **+1,285.7** | +308.3 | **+830.3** |
| **Arts & Humanities** | **3,128.7** | 2,758.3 | **+1,405.9** | +768.6 | **+370.4** |
| **Services** | **3,045.0** | 3,013.6 | **+1,081.1** | +1,088.0 | **+31.4** |

### Cohort Insights
- **Steepest Trajectories:** ICT and Engineering widen their lead substantially over time. While ~2018 ICT graduates earn **RM 3,445**, senior ~2010 graduates jump to **RM 5,375** (a **56.0% experience gain**).
- **Plateauing Fields:** Services graduates in the ~2010 cohort average **RM 3,045**, virtually unchanged from ~2018 graduates at **RM 3,014** (an experience gain of just **RM 31.4**), demonstrating a severe long-term ceiling.

---

## 6. Macro Drivers: STEM & Educational Attainment

### STEM vs. Non-STEM Progression
Across paired respondents:
- **STEM ($n = 1,159$):**
  - First Job: **RM 2,136** $\rightarrow$ Current Job: **RM 4,171**
  - Mean Wage Growth: **+RM 2,035 (+129.1%)**
- **Non-STEM ($n = 1,137$):**
  - First Job: **RM 1,992** $\rightarrow$ Current Job: **RM 3,557**
  - Mean Wage Growth: **+RM 1,565 (+112.5%)**
- **The Divergence:** Starting salaries differ by only **RM 144**, but the current wage gap widens to **RM 614**, showing that STEM careers offer stronger compounding increments.

### Educational Qualification Impact
Current salaries categorized by highest educational certificate attained:

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
   ICT and Engineering yield both superior salary ceilings and accelerating wage trajectories. Policy interventions incentivizing STEM enrollment align with proven market rewards.
2. **Early-Career vs Mid-Career Disconnect in Non-Technical Disciplines:**  
   Social Sciences, Journalism, Business, and Law start at relatively modest levels (~RM 1,800–RM 2,000), but demonstrate strong mid-career recovery, breaking RM 4,200+ by the senior cohort.
3. **Addressing the Services & Arts Wage Trap:**  
   Graduates in Services and Arts & Humanities experience both low entry pay and sluggish long-term growth. Upskilling, technical adjacencies, and higher-value services training are required to lift career ceilings in these sectors.
