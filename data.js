'use strict';
const SOURCES = [
['Baseline','User-supplied motion sickness.pdf — clinical framework; paraphrased, not republished',''],
['CDC','CDC Yellow Book 2026 — prevention and medication overview','https://www.cdc.gov/yellow-book/hcp/travel-air-sea/motion-sickness.html'],
['NHS','NHS — cinnarizine dosing and safety','https://www.nhs.uk/medicines/cinnarizine/'],
['Spinfree PI','Intas prescribing information — cinnarizine 20 mg + dimenhydrinate 40 mg; vertigo indication','https://intasaquilaabpi.com/uploads/image/3afac-spinfree-ab-pi.pdf'],
['Stugeron Plus PI','Indian prescribing information, revision December 2023','https://www.jnjlabels.com/in/stugeronplustablets/pi/STUGERONPLUS_TABLETS-PI.PDF'],
['Meclizine brands','Tata 1mg — Indian brand listings','https://www.1mg.com/generics/meclizine-210218'],
['Cinnarizine brands','Tata 1mg — Indian brand listings','https://www.1mg.com/generics/209604'],
['Combination brands','Tata 1mg — Indian combination listings','https://www.1mg.com/generics/cinnarizine-dimenhydrinate-401063'],
['Other H1 brands','Tata 1mg — antiemetic listings','https://www.1mg.com/drugs-therapeutic-classes/other-antiemetics-and-antinauseants-95'],
['Spinfree listing','Indian retail listing; stock varies by city','https://www.1mg.com/drugs-therapeutic-classes/drug-class-274'],
['Consensus','Bárány Society diagnostic consensus — motion-linked symptom pattern','https://pmc.ncbi.nlm.nih.gov/articles/PMC9249300/']
];
// Directory entries are market references, not a recommendation to prescribe.
const BRANDS = [
['H1 antihistamines','GravOL','Dimenhydrinate 50 mg','Wallace Pharmaceuticals Pvt Ltd',8],
['H1 antihistamines','Avomine','Promethazine 25 mg','Abbott',8],
['H1 antihistamines','Phenergan','Promethazine 10 / 25 mg; syrup 5 mg/5 mL','Abbott',8],
['H1 antihistamines','Diligan','Meclizine; 25 mg tablet listed','Dr Reddy’s Laboratories Ltd',5],
['H1 antihistamines','PNV','Meclizine; verify pack strength','Yash Pharma Laboratories Pvt Ltd',5],
['Cinnarizine (H1 / calcium-entry blocker)','Stugeron','Cinnarizine; verify pack strength','Janssen Pharmaceuticals (listing)',6],
['Cinnarizine (H1 / calcium-entry blocker)','Cinzan','Cinnarizine 25 / 75 mg variants','FDC Ltd',6],
['Cinnarizine (H1 / calcium-entry blocker)','Cintigo','Cinnarizine; verify pack strength','Wallace Pharmaceuticals Pvt Ltd',6],
['Cinnarizine (H1 / calcium-entry blocker)','Diziron','Cinnarizine; verify pack strength','Glenmark Pharmaceuticals Ltd',6],
['Cinnarizine (H1 / calcium-entry blocker)','Dizikind','Cinnarizine; verify pack strength','Mankind Pharma Ltd',6],
['Combination: cinnarizine + dimenhydrinate','Spinfree','Cinnarizine 20 mg + dimenhydrinate 40 mg','Intas Pharmaceuticals Ltd',9],
['Combination: cinnarizine + dimenhydrinate','Stugeron Plus','Cinnarizine 20 mg + dimenhydrinate 40 mg','Janssen Pharmaceuticals (listing)',7],
['Combination: cinnarizine + dimenhydrinate','Dizitac','Cinnarizine + dimenhydrinate; verify strength','Sun Pharmaceutical Industries Ltd',7],
['Combination: cinnarizine + dimenhydrinate','Gemvert','Cinnarizine + dimenhydrinate; verify strength','Dr Reddy’s Laboratories Ltd',7],
['Combination: cinnarizine + dimenhydrinate','Diziron D','Cinnarizine + dimenhydrinate; verify strength','Glenmark Pharmaceuticals Ltd',7]
];
if(typeof module !== 'undefined') module.exports = {SOURCES,BRANDS};
