const About = () => {
  return (
    <section id="about" className="py-32 px-6 scroll-mt-20 border-t border-border/20">
      <div className="container max-w-3xl mx-auto">
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              О проблеме
            </h2>
            <div className="space-y-8 text-left text-muted-foreground font-light text-content" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', lineHeight: '1.75' }}>
              <p className="drop-cap">
                В современном мире практически каждый стремится к успеху. <strong>Мужчины хотят быть состоятельными, влиятельными, окружёнными вниманием и возможностями</strong>, которые позволяют решать вопросы одним движением руки. Женщины мечтают о надёжном партнёре, гармоничной семье и беззаботной жизни, полной красоты и благополучия.
              </p>
              <p className="drop-cap">
                Однако реальность нередко оказывается иной: мы видим <strong>конфликты, недопонимание и напряжение</strong> — не только в семьях, но и на международной арене. Подобные проблемы сопровождают человечество давно. Но возникает вопрос: можем ли мы построить свою жизнь иначе или обречены существовать в атмосфере разочарования, с сожалением вспоминая упущенные годы?
              </p>
              <p className="drop-cap">
                Многие люди <strong>духовно обеднели</strong>. Погоня за деньгами и поверхностными удовольствиями лишила их внутренней устойчивости. Спросите своих знакомых о смысле жизни — большинство либо затруднится ответить, либо ограничится общими фразами. При этом <strong>статистика разводов растёт</strong>, а отношения часто оказываются полными взаимных претензий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

