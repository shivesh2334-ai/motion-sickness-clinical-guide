'use strict';
function assess(p) {
 const age=Number(p.age);
 if(p.age==='' || !Number.isFinite(age) || age<0 || age>120) return {level:'invalid',title:'Enter a valid age (0–120 years)',items:[]};
 const warnings=[];
 if(age<18) warnings.push('Child or adolescent: clinician must select age-appropriate treatment; adult doses do not apply. Avoid scopolamine patches in children. Promethazine is contraindicated below 2 years.');
 if(age>=65) warnings.push('Older adult: review falls, confusion, anticholinergic burden and urinary retention before medication.');
 if(p.pregnancy) warnings.push('Pregnancy or breastfeeding: individual obstetric / medication review; do not use the fixed combination without specialist assessment.');
 if(p.glaucoma) warnings.push('Glaucoma or urinary retention: anticholinergic medicines may be unsuitable.');
 if(p.parkinson) warnings.push('Parkinsonism: cinnarizine can worsen motor symptoms; clinician review required.');
 if(p.organ) warnings.push('Kidney or liver impairment: review the exact product label; cinnarizine/dimenhydrinate is contraindicated at CrCl <25 mL/min or severe hepatic impairment.');
 if(p.sedatives) warnings.push('Alcohol, opioids, sleeping tablets, QT-prolonging drugs or antihistamines: medication reconciliation required; avoid duplicate ingredients.');
 if(p.driving) warnings.push('Driving / safety-critical work: do not use sedating motion sickness medication while performing these tasks. Do not use stimulants to cancel sedation.');
 if(p.neuro || p.collapse || p.severe) return {level:'urgent',title:'Urgent medical assessment',items:['Do not assume motion sickness. Stop travel safely and arrange urgent in-person evaluation.',p.neuro?'New focal neurological symptoms, severe sudden headache or inability to walk can indicate a central cause.':'',p.collapse?'Collapse, chest pain or altered consciousness requires emergency assessment.':'',p.severe?'Inability to retain fluids, very low urine output or blood in vomit needs urgent evaluation.':'','No self-treatment plan generated.'],warnings};
 if(!p.motion || p.rest || p.ear || age<2) return {level:'review',title:'Assess alternative causes first',items:['The pattern is atypical for uncomplicated motion sickness. Arrange clinician assessment.',p.rest?'Symptoms without motion or persisting after travel: consider vestibular migraine, BPPV, vestibular neuritis, metabolic or medication causes.':'',p.ear?'New hearing loss / ear symptoms: prompt ENT assessment; sudden hearing loss is time-sensitive.':'',age<2?'Motion sickness is unusual under 2 years; evaluate another cause.':'','Examination should guide tests; avoid blanket scans or laboratory panels.'],warnings};
 const items=['Compatible with motion sickness; this checklist does not confirm a diagnosis.','Typical recurrent, motion-linked symptoms usually need no routine laboratory tests or imaging.'];
 if(!p.prior) items.push('First episode / new susceptibility: review migraine, vestibular disease and medicines, especially if symptoms recur.');
 items.push(p.phase==='prevention'?'Begin with travel positioning, a horizon view and avoiding screens. Previous disabling symptoms may justify one clinician-selected preventive drug.':'Stop the provoking activity where possible. Rest with head supported and take small frequent sips of oral rehydration fluid; oral drugs may absorb poorly once vomiting starts.');
 if(p.severity==='mild') items.push('Mild symptoms: use non-drug measures first; medication is not automatically necessary.');
 else if(warnings.length) items.push('Medication selection needs clinician review because safety modifiers are present.');
 else items.push(p.duration==='long'?'For prolonged travel, discuss an antihistamine or scopolamine patch if locally available and suitable.':'For shorter travel, discuss a single H1 antihistamine; check timing, label and sedation precautions.');
 items.push('Reassess if symptoms do not settle after motion stops, worsen, or recur without travel. Review benefit and adverse effects before the next journey.');
 return {level:'typical',title:'Motion-linked pattern',items,warnings};
}
if(typeof module!=='undefined') module.exports={assess};
