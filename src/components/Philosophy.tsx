import Quote from "@/components/Quote";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 px-6 bg-gradient-to-b from-muted/5 via-background to-muted/10 border-t border-border/20 scroll-mt-20">
      <div className="container max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-5">
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Философия
            </h2>
          </div>
          
          <div className="space-y-8 text-muted-foreground font-light text-content" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
            <div className="space-y-8">
              <p className="drop-cap">
                Даже если рассматривать идеальный союз, в котором супруги живут в согласии до конца своих дней, он не раскрывает подлинную цель человеческого существования — ведь семья свойственна и животным, и растениям, которые могут жить тысячелетия. <strong>Продолжительность жизни сама по себе не является критерием успеха</strong>, как и материальные достижения.
              </p>
              
              <p className="drop-cap">
                Чем же человек отличается от животного? Наше тело далеко от совершенства: одна бактерия способна нарушить все его системы. Мы слабее многих животных физически и сенсорно.
              </p>
              
              <Quote>
                Древние источники выделяют иной вид разума — <strong>духовный</strong>, который и делает человека человеком.
              </Quote>
              
              <p>
                Жизнь коротка и бесценна: даже мгновение невозможно купить ни за какие деньги. Когда человек не понимает ценности собственной жизни, он перестаёт её беречь, а иногда и вовсе обрывает её по собственной воле.
              </p>
              
              <p className="drop-cap">
                Не случайно в странах с высоким уровнем благосостояния фиксируются <strong>рекордные показатели депрессии и самоубийств</strong>. Материальные достижения сами по себе не дают удовлетворения — это закономерность, подтверждаемая жизнью. Погоня за иллюзорным счастьем истощает человека.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

