
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-red-50 py-8 px-2 md:py-12 md:px-12 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white relative overflow-hidden">
        
        {/* Top Branding Section (Logo Image) */}
        <div className="py-6 md:py-12 flex justify-center relative">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <img 
                src="https://i.postimg.cc/CK2JwkLv/kojie-logo.png" 
                alt="zero PIGMENT light logo" 
                className="h-12 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Hero Section: Three-image Composition - Strictly Forced Row */}
        <div className="w-full flex items-center justify-center mb-8 md:mb-16 px-1 md:px-4">
          <div className="flex flex-row items-center justify-between w-full max-w-5xl gap-1 md:gap-8">
            {/* Left Image */}
            <div className="flex-1 flex justify-end min-w-0">
              <img 
                src="https://i.postimg.cc/qMQsky1g/ri-ben-lian-you-lian.png" 
                alt="decorative left" 
                className="w-full max-w-[180px] h-auto object-contain opacity-90"
              />
            </div>

            {/* Center Product Image */}
            <div className="flex-[2] flex justify-center min-w-0">
              <div className="max-w-xl w-full">
                <img 
                  src="https://i.postimg.cc/5yCRhpBB/kojie.png" 
                  alt="kojie·san branding" 
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-start min-w-0">
              <img 
                src="https://i.postimg.cc/DwZqm0NY/ri-ben-lian-zuo-lian.png" 
                alt="decorative right" 
                className="w-full max-w-[180px] h-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Details Section - Strictly Forced 2-Column Grid */}
        <div className="px-2 md:px-12 pb-12 grid grid-cols-2 gap-4 md:gap-16 text-[9px] md:text-[12px] leading-relaxed text-neutral-600">
          {/* English Content */}
          <div className="space-y-4 md:space-y-8">
            <p className="text-[10px] md:text-base text-black/80 leading-relaxed">
              <span className="font-bold text-black">kojie•san</span> Skin Lightening Soap uses high-grade kojic acid that effectively makes skin lighter. It has <span className="font-bold text-red-600 uppercase">Zero Pigment Light Technology</span> that targets dark spots and uneven skin tone.
            </p>
            
            <div className="space-y-3 md:space-y-6">
              <div>
                <h4 className="font-bold text-black uppercase tracking-widest mb-1 md:mb-2 text-[7px] md:text-[10px]">Zero Pigment Light Technology</h4>
                <p className="opacity-90 leading-relaxed">A unique skin lightening delivery system that effectively bonds the potent active ingredient to ensure that it is absorbed and activated in your skin and areas where it is most needed.</p>
              </div>

              <p className="font-bold italic text-black">Clinically proven to lighten skin in as fast as 7 days.</p>
              
              <div className="flex flex-row gap-2 md:gap-8 text-[6px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                <span>Dermatologically Tested</span>
                <span>Paraben Free</span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 pt-2 md:pt-4 border-t border-neutral-50">
              <p><span className="font-bold uppercase text-black">How to use:</span> Wet soap and work into a lather, gently massage onto skin. Rinse off with water.</p>
              <p><span className="font-bold uppercase text-black">Precautions:</span> For external use only. For any signs of irritation, discontinue use. If product gets into eyes, rinse thoroughly with water.</p>
            </div>
          </div>

          {/* Arabic Content */}
          <div className="space-y-4 md:space-y-8 text-right" dir="rtl">
            <p className="font-light text-[10px] md:text-base leading-loose">
              <span className="font-bold text-black">صابون إضاءة البشرة • kojie san</span>
              <br />
              صابون حمض الكوجيك الذي وثقت به دائماً، الصابون الذي يحدده طبيب الجلدية متوفر الآن في جميع صيغه حمض الكوجيك الطبيعية التي تساعد في تبييض البقع.
            </p>
            <p className="opacity-80 leading-loose">
              و لقد اكتشف حمض الكوجيك في اليابان، و هو منتوج ثانوي من إنتاج الكوجي، أو نبيذ الأرز، الذي يستعمل في صناعة مستحضرات التجميل، فإن حمض الكوجيك هو معروف بسبب تبييضه الممتاز.
            </p>
            <div className="pt-2 md:pt-4 text-[8px] md:text-[11px] font-bold text-black">طريقة الاستخدام: استعمل يوميا كصابون عادي للوجه و الجسم</div>
          </div>
        </div>

        {/* Ingredients & Footer Section - Strictly Forced 2-Column Grid */}
        <div className="p-4 md:p-12 bg-neutral-50/50">
          <div className="grid grid-cols-2 gap-2 md:gap-12 items-end">
            <div className="space-y-4">
              <div>
                <h5 className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-neutral-300 mb-1 md:mb-2">Ingredients</h5>
                <p className="text-[7px] md:text-[10px] leading-tight md:leading-relaxed opacity-60">
                  Cocos nucifera (Coconut) Oil, Water, Sodium Hydroxide, Fragrance, Kojic Acid, Glycerin, Xanthan Gum, Caprylyl Glycol, Phenoxyethanol, Glucose, Chondrus crispus (Carrageenan) Extract, Ethyhexylglycerin, Cocamide DEA, Parafinum Liquidum, Melaleuca alternifolia (Tea Tree) Oil, CI 15985, CI 19140, BHT
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
               <div className="text-right text-[7px] md:text-[10px] text-neutral-400 font-bold uppercase space-y-0.5 md:space-y-1">
                 <p className="text-black">Distributed By:</p>
                 <p>Beauty Elements Ventures Inc.</p>
                 <p>Made in the Philippines</p>
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Background Decorative Text (Subtle watermark) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.01] select-none z-[-1]">
         <div className="absolute top-20 left-20 text-[15vw] font-black uppercase tracking-tighter">BEVI</div>
         <div className="absolute bottom-20 right-20 text-[15vw] font-black uppercase tracking-tighter">KOJIC</div>
      </div>
    </div>
  );
};

export default App;
