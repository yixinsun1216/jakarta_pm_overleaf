Thank you for the opportunity to revise our manuscript #2025-34331R.

We are grateful to the editor and both reviewers. Reviewer 1's first major comment prompted us to collect new data, which corrected an error in our earlier reasoning and led to one change of wording in the abstract. Below we respond to the two issues the editor flagged, (a) and (b), followed by Reviewer 1's remaining comments. All changes to the manuscript and SI Appendix are marked in red in the submitted files.

NOTES

INDEXING: SI figures have been renumbered. Fig. S5 (infiltration factor by ambient temperature) and Fig. S9 (sensor validation) are new; former Figs. S5–S7 are now S6–S8. The former cross-sensor sensitivity figure (S8) and its table are replaced by the new Sensor Validation section and Fig. S9.

CODE AND DATA: The replication package now includes the hourly collocation data and the code that produces the sensor validation results (code/cleaning/04_clean_collocation.R; code/analysis/appendix.R; code/analysis/fig2_infiltration.R).


RESPONSE TO EDITOR

(a) Reviewer 1, Major comment 1. We have collected the side-by-side data the reviewer suggested, and we concede the reviewer's argument: our earlier statement was not true. Our formal response is under Reviewer 1, Major comment (1) below.

(b) Reviewer 1, Major comment 5. We have replaced "exposure" with "concentrations" in the title, abstract and significance statement, and revised its use throughout. Our formal response is under Major comment (5) below.

We have also addressed the reviewer's other comments; our responses follow.


RESPONSE TO REVIEWER 1

—
Major comment (1): "A Cubic PM sensor is used for indoor measurements and a separate Plantower PM sensor is used for outdoor measurements. [...] the manuscript really should report side-by-side outdoor deployments of the Cubic/Plantower sensors, potentially next to a reference monitor. [...] Lines 1062-1070 in the revised manuscript state that the potential impacts of sensor model differences are less problematic due to the reliance on relative temporal comparisons. This statement is not true -- the infiltration factor relies on accurate absolute mass estimates and an indoor sensor that is biased high by 50% would also bias the infiltration factor high by 50%. Source apportionment analyses, another key study result, would also be impacted."

Response: We thank the reviewer for pressing this point. The reviewer is right, and we have removed the statement. The infiltration factor is the slope of indoor on outdoor PM2.5; if the indoor sensor read a fixed proportion of true concentrations, the slope would be scaled by that proportion no matter how closely the two series co-move. An indoor sensor biased high by 50% would bias the infiltration factor high by 50%, and source shares, which are expressed relative to mean indoor PM2.5, would be affected as well. Our earlier argument conflated correlation, which is scale-free, with the slope, which is not.

We therefore ran the side-by-side deployments the reviewer suggested, with our hardware partner Nafas:

(i) Outdoor sensor against a reference monitor. An Airly unit of the model used in our network was collocated with the US Embassy reference monitor in Jakarta. Over May–July 2024, the season of our monitoring, hourly R² = 0.90 (N = 1,948 hours; slope 1.06); the sensor reads on average 13% higher than the reference.

(ii) Indoor device against the outdoor sensor. Three indoor devices of the type installed in study homes were deployed side by side with an outdoor sensor of the same model as our network for two weeks (16–30 September 2026; N = 349 hours). The indoor devices track the outdoor sensor closely (hourly R² = 0.88–0.90) but read lower.

The key finding is the form of the difference. It is mostly a constant offset, not a proportional bias: regressing each indoor device on the outdoor sensor gives slopes of 0.93, 1.06 and 0.88 (mean 0.96) with intercepts of −9, −12 and −6 µg/m³, so the indoor device reads about 10 µg/m³ lower across the observed range (outdoor readings of 23–100 µg/m³). Consistent with an additive offset, the ratio of indoor to outdoor readings rises with concentration (0.67, 0.77 and 0.82 across terciles of outdoor PM2.5). The offset does not vary materially with relative humidity (ratio 0.76 at or below 75% RH, 0.78 above) or temperature (0.79, 0.77 and 0.75 across terciles of 24–33°C). We attribute it to the indoor sensor being housed inside the device, whereas the outdoor sensor is directly exposed to ambient air.

The implications, now stated in the manuscript, are:

- Infiltration factor: essentially unaffected. Only the proportional component of a sensor difference scales a regression slope; an additive offset is absorbed by the intercept and fixed effects of Eq. (1). Converting both indoor and outdoor readings into reference-monitor units, using the two collocation relationships, and re-estimating our main specification gives 0.62 (95% CI [0.45, 0.79]) against 0.59 unadjusted, now shown in Fig. 2a as a "Sensor Adjusted" specification. (The conversion amounts to dividing indoor readings by the mean slope of 0.96: the intercepts are absorbed by the fixed effects, and the outdoor sensor's calibration against the reference rescales both sides of the regression equally.) Because noise in the outdoor sensor attenuates the indoor-on-outdoor slope, the SI also reports the reverse regression (slopes 1.0–1.2), which would place the adjusted estimate at 0.50–0.59. Either way, the difference between sensor types does not materially affect the infiltration factor.

- Concentration levels: conservative. The same conversion raises mean indoor PM2.5 from 42.3 to about 47.5 µg/m³, the share of household-days above the WHO 24-hour guideline from 78% to 88%, and the indoor/outdoor ratio from 1.07 to 1.37.

- Source apportionment. Source effects in µg/m³ (e.g., the smoking effect) and comparisons across households (the income gradient) are differences between indoor readings, in which a constant offset cancels. The shares of mean indoor PM2.5 are affected because their denominator is understated: recomputed in reference-monitor units, the outdoor share falls from 56% to about 45% and the smoking share from 19% to about 17%, with the ranking unchanged. We have accordingly changed "the majority of indoor PM2.5 originates outdoors" to "the largest share" in the abstract and Results.

We keep the unadjusted estimates as our main results and report the adjusted ones alongside them, because the corrections come from a two-week deployment at a single site with devices other than those installed in study homes, while the direction of the bias is unambiguous.

The reviewer also notes that sensor performance can depend on particle size distribution and composition. Our collocations were run in Jakarta ambient air, so they characterize the sensors' relative response to the local outdoor aerosol, which is what the infiltration factor concerns. They do not characterize the response to indoor-generated particles such as tobacco smoke, for which the two sensor types could differ. This caveat applies to the absolute magnitude of the indoor-source effects, not to their sign or ranking, and we now note it in the Limitations.

Specific changes:
1. Materials and Methods, "Outdoor PM2.5": the paragraph the reviewer objected to is replaced by: "Because indoor and outdoor PM2.5 are measured with different sensor types, differences in their calibration could affect our estimates. A proportional difference would scale the estimated infiltration factor, which is a regression slope, whereas a constant difference in levels would shift indoor concentrations without affecting the infiltration factor. We assess both with two collocation exercises (SI Appendix, Fig. S9). [...] Converting both series to reference-monitor units using these two relationships and re-estimating leaves the infiltration factor essentially unchanged (0.62 instead of 0.59; Fig. 2a), because only the slope of the indoor device on the outdoor sensor affects it. Our estimates of indoor concentration levels are, by contrast, conservative [...]."
2. Fig. 2a: new specification 8, "Sensor Adjusted", with a caption sentence and an entry in the Methods specification list.
3. Results: "Adjusting for the difference between the indoor and outdoor sensor types, measured in a side-by-side deployment, leaves the estimate essentially unchanged (0.62; 95% CI [0.45, 0.79]; Fig. 2a, Sensor Adjusted; Materials and Methods)." After the indoor/outdoor ratio: "Because the indoor device records lower concentrations than the outdoor sensor for the same air, this ratio is conservative: adjusting for the difference between the two sensor types raises it to about 1.4."
4. Abstract and Results: "the majority of" → "the largest share of" indoor PM2.5 originates outdoors.
5. Discussion, Limitations: "Our collocation exercises show that the indoor device records concentrations about 10 µg/m³ lower than the outdoor sensor, so our estimates of indoor concentration levels are conservative, while the infiltration factor is essentially unaffected. These corrections are estimated from a two-week deployment at a single site, however [...]."
6. SI Appendix: new subsection "Sensor Validation" (bias algebra; the two collocations; implications for the infiltration factor, levels and source shares) and new Fig. S9 (three panels: outdoor sensor vs reference monitor; indoor devices vs outdoor sensor with slopes and intercepts; a five-day time series). The former cross-sensor sensitivity analysis (α grid), its figure and table are removed.

—
Major comment (5): "'Exposure' has a precise meaning in subfields of public health (exposure = integral of concentration * time in contact with concentration). Because the manuscript reports concentrations (not exposures), the text should recognize those subfields and be careful in how 'exposure' is used (e.g., don't use in the new title and a few other places)."

Response: We agree. Our monitors measure concentrations at a fixed location in the home; they do not measure personal exposure in the exposure-science sense. We have revised the manuscript so that statements about our data refer to concentrations, and so that indoor and outdoor readings are always compared as concentrations.

Specific changes:
1. Title: "Beyond Stoves and Outdoor Monitors: Indoor PM2.5 Concentrations and Inequality in a Fast Growing Megacity".
2. Abstract and significance statement: "exposure" replaced by "concentrations" / "indoor PM2.5" throughout.
3. Results and Discussion: data statements reworded, e.g., "low-income households are exposed to the highest levels" → "experience the highest levels"; comparisons of outdoor and indoor readings are now concentration-to-concentration. [CHECK remaining instances: "increasing their exposure to outdoor pollution" (AC paragraph); "low-income households are exposed to the highest levels" (Discussion).]
4. "Exposure" is retained where we refer to the epidemiological literature and its proxies (e.g., "research typically proxies exposure using cooking fuel type and ambient outdoor PM2.5"), and in the motivation and limitations, where we state that stationary indoor concentrations are a step toward, but not a measure of, personal exposure.

—
Major comment (2): cooking.

Response: [CHECK — describe the diagnostic run: e.g., hourly indoor profile in non-smoking households around meal times; a lagged cooking indicator.] The cooking-hour coefficient remains small. We now note that this is consistent with the efficacy of LPG, while acknowledging that kitchen-level studies in LPG households document short-lived spikes that our hourly, room-level data may miss. The time-use recall module from which the cooking indicator is built is now reproduced in the SI Appendix (Survey Instruments).

—
Major comment (3): framing of clean cooking fuels.

Response: We agree and have reframed the introduction and significance statement. Cooking fuel type and ambient PM2.5 are described as incomplete rather than ineffective proxies, and we now state that clean fuels deliver large reductions relative to biomass-dominated settings (the Dhaka comparison), even though indoor PM2.5 remains persistently high.

—
Major comment (4): specification without controls; "infiltration factor" vs β.

Response: We added the suggested specification to Fig. 2a ("Sources Only": hyperlocal source controls only, with no temperature, humidity or time fixed effects); the estimate is 0.72 [CHECK], within the range of the other specifications. We also added Fig. S5, which shows the infiltration factor by ambient temperature bin, and comment on it in the Results (the estimate is slightly higher above 30°C but not statistically different). We retain "infiltration factor" for β, following Chen and Zhao (2011), and have removed the three instances of "infiltration rate". Control-variable magnitudes are reported in [CHECK].

—
Minor comments:
- L31, L75: reworded as suggested; "ambient" added to the GBD statement.
- L49–57: rephrased so as not to imply that only eight studies exist or that solid fuels are not the main driver where they are used.
- L125–126: "dense household activity" rephrased.
- L158: "are exposed to" → "experience".
- L184: "highly representative" softened; we note that stationary monitors miss within-home spatial variation.
- L216–220: citations added.
- L308–369: temperature heterogeneity added (Fig. S5) and discussed in the Results.
- L426–429: [CHECK — text still says "toward the upper end"; revise to "within the 50–80% range reported for Western residences" or justify.]
- L434 / L489: the waste-burning estimate now reports its confidence interval (12%, 95% CI [−4.6%, 28.7%]) and the text says its contribution cannot be pinned down precisely.
- Fig. 3: y-axis label changed from "Source" to [CHECK].
- L652: [CHECK — household size / rooms.]
- L682–683: [CHECK — WHO 99th-percentile compliance statement.]
- L1141–1145: temperature and humidity are included in all specifications except "Sources Only"; the text now says so.
- Fig. 4: cooking frequency added as a subplot [CHECK].
- Table S4: [CHECK — ΔP counterfactual removed / replaced with a plausible range]; we note that reducing P would also reduce the air-change rate.


RESPONSE TO REVIEWER 2

We thank the reviewer for the positive assessment and for the earlier comments, which improved the paper.
