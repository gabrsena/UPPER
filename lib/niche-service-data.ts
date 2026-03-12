export interface NicheServiceContent {
  title: string;
  description: string;
  benefits: string[];
  painPoints: string[];
  solution: string;
}

export interface NicheData {
  name: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  context: string;
  painPoints: string[];
  howWeHelp: string;
  services: Record<string, NicheServiceContent>;
}

export const nicheData: Record<string, NicheData> = {

  // ─────────────────────────────────────────────
  // SAÚDE & BEM-ESTAR
  // ─────────────────────────────────────────────

  dentistas: {
    name: "Dentistas",
    slug: "dentistas",
    label: "Dentistas",
    title: "Especialistas em Atrair Pacientes Qualificados para Dentistas",
    description: "Transformamos o seu consultório em referência local, atraindo pacientes que buscam qualidade — não apenas o preço mais baixo.",
    context: "O mercado odontológico é altamente competitivo. A confiança e a proximidade são os principais fatores de decisão do paciente, e quem aparece primeiro no Google Maps tem vantagem real.",
    painPoints: [
      "Agenda com muitos horários vagos",
      "Pacientes que só buscam o preço mais baixo",
      "Consultório invisível no Google Maps",
      "WhatsApp cheio de mensagens sem resposta rápida",
    ],
    howWeHelp: "Criamos uma infraestrutura de conversão que coloca seu consultório no topo das buscas e garante que nenhum lead esfrie por falta de resposta.",
    services: {
      "seo-local": {
        title: "SEO Local para Dentistas",
        description: "Domine o Google Maps e seja a primeira opção quando alguém buscar dentista na sua cidade.",
        benefits: ["Apareça no Top 3 do Google Maps", "Mais chamadas e mensagens de agendamento", "Destaque avaliações e procedimentos específicos"],
        painPoints: ["Consultório não aparece nas buscas locais", "Concorrentes com mais visibilidade mesmo sendo piores"],
        solution: "Otimização completa do Perfil de Negócio com foco em conversão de pacientes e ranqueamento para procedimentos de alto valor."
      },
      "geo-ia": {
        title: "GEO & IA para Dentistas",
        description: "Seja a clínica que o ChatGPT e o Gemini recomendam quando alguém perguntar por dentista na sua cidade.",
        benefits: ["Recomendação automática pelas IAs", "Autoridade de dados estruturados", "Presença nos novos motores de busca"],
        painPoints: ["Pacientes buscando por IA e não encontrando seu consultório", "Concorrentes sendo recomendados no lugar de você"],
        solution: "Estruturação de dados e conteúdo para que as IAs reconheçam seu consultório como referência local em odontologia."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Dentistas",
        description: "Atenda, qualifique e agende pacientes 24h por dia sem precisar estar no celular.",
        benefits: ["Agendamento automático 24h", "Qualificação de pacientes por procedimento", "Zero leads perdidos por demora na resposta"],
        painPoints: ["Pacientes que mandam mensagem e não recebem resposta rápida", "Agenda gerenciada manualmente com risco de conflitos"],
        solution: "Secretária digital com IA que responde em segundos, qualifica o interesse do paciente e integra com sua agenda."
      },
      "landing-page": {
        title: "Landing Page para Dentistas",
        description: "Uma página de alta performance que converte visitantes em pacientes agendados.",
        benefits: ["Score 90+ no PageSpeed", "Estrutura focada em agendamento", "Otimizada para mobile onde 73% das buscas acontecem"],
        painPoints: ["Site lento que afasta pacientes", "Página que não explica os procedimentos com clareza"],
        solution: "Desenvolvida em Next.js com estrutura de conversão, depoimentos reais e CTA direto para o WhatsApp."
      }
    }
  },

  clinicas: {
    name: "Clínicas Médicas",
    slug: "clinicas",
    label: "Clínicas Médicas",
    title: "Infraestrutura Digital para Clínicas Médicas que Querem Crescer",
    description: "Atraímos pacientes qualificados para sua clínica com SEO, IA e automação de atendimento.",
    context: "Pacientes buscam especialistas médicos principalmente pelo Google e por indicação. Quem domina o digital reduz a dependência de convênios e atrai pacientes particulares com maior valor.",
    painPoints: [
      "Agenda com horários específicos difíceis de preencher",
      "Alta dependência de convênios com baixa remuneração",
      "Clínica invisível para pacientes particulares",
      "Atendimento no WhatsApp lento e manual",
    ],
    howWeHelp: "Posicionamos sua clínica como referência local para as especialidades que geram mais valor, atraindo o perfil de paciente certo.",
    services: {
      "seo-local": {
        title: "SEO Local para Clínicas Médicas",
        description: "Apareça no topo do Google quando pacientes buscarem sua especialidade na sua cidade.",
        benefits: ["Ranqueamento por especialidade médica", "Mais pacientes particulares", "Autoridade digital na sua região"],
        painPoints: ["Clínica não aparece para buscas de especialidade", "Concorrentes com menos qualidade aparecendo antes"],
        solution: "SEO técnico com foco em especialidades de alto valor e otimização do Perfil de Negócio no Google."
      },
      "geo-ia": {
        title: "GEO & IA para Clínicas Médicas",
        description: "Quando alguém perguntar ao ChatGPT por uma clínica de cardiologia na sua cidade, você aparece.",
        benefits: ["Indicação automática pelas IAs", "Presença nos novos canais de busca", "Dados estruturados por especialidade"],
        painPoints: ["Ausência nas recomendações de IA", "Pacientes encontrando concorrentes via ChatGPT e Gemini"],
        solution: "Estruturação de dados médicos e conteúdo de autoridade para ranqueamento nas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Clínicas Médicas",
        description: "Triagem inteligente que qualifica o paciente e agenda na especialidade certa, 24h por dia.",
        benefits: ["Triagem automática por especialidade", "Agendamento sem intervenção humana", "Confirmações e lembretes automáticos"],
        painPoints: ["Recepção sobrecarregada com ligações e mensagens", "Pacientes sem resposta fora do horário comercial"],
        solution: "IA de atendimento que entende a necessidade do paciente, direciona para o médico certo e confirma o agendamento."
      },
      "landing-page": {
        title: "Landing Page para Clínicas Médicas",
        description: "Presença digital que transmite confiança e converte visitas em agendamentos.",
        benefits: ["Design que transmite credibilidade médica", "Perfis dos especialistas destacados", "CTA claro para agendamento"],
        painPoints: ["Site desatualizado que passa desconfiança", "Dificuldade de encontrar informações sobre especialidades"],
        solution: "Site institucional com foco em especialidade, equipe médica e integração direta com WhatsApp."
      }
    }
  },

  fisioterapeutas: {
    name: "Fisioterapeutas",
    slug: "fisioterapeutas",
    label: "Fisioterapeutas",
    title: "Marketing Digital para Fisioterapeutas: Mais Pacientes, Agenda Cheia",
    description: "Colocamos sua clínica de fisioterapia no topo do Google e da IA para atrair pacientes que precisam do seu serviço agora.",
    context: "Fisioterapeutas dependem muito de indicação médica e boca a boca. O digital abre um canal direto com o paciente que já está buscando ativamente pelo serviço.",
    painPoints: [
      "Agenda com horários difíceis de preencher",
      "Alta dependência de encaminhamentos médicos",
      "Clínica pouco conhecida fora do círculo de indicações",
      "Dificuldade de comunicar a especialização",
    ],
    howWeHelp: "Criamos presença digital que posiciona sua especialização e atrai pacientes com a dor certa para o seu método.",
    services: {
      "seo-local": {
        title: "SEO Local para Fisioterapeutas",
        description: "Apareça quando alguém buscar fisioterapeuta na sua cidade, filtrado pela sua especialização.",
        benefits: ["Ranqueamento por especialidade (RPG, pilates, ortopédica)", "Mais pacientes por busca orgânica", "Redução da dependência de encaminhamentos"],
        painPoints: ["Clínica não aparece no Google Maps", "Pacientes não encontram sua especialização"],
        solution: "SEO técnico com foco na especialidade e região, com otimização do Perfil de Negócio."
      },
      "geo-ia": {
        title: "GEO & IA para Fisioterapeutas",
        description: "Seja recomendado pelo ChatGPT quando alguém buscar fisioterapeuta especializado na sua cidade.",
        benefits: ["Recomendação por especialidade nas IAs", "Conteúdo técnico que gera autoridade", "Presença no novo canal de busca"],
        painPoints: ["Invisível nas recomendações de IA", "Concorrentes sendo indicados por ChatGPT e Gemini"],
        solution: "Estruturação de conteúdo de especialidade para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Fisioterapeutas",
        description: "Qualifique o paciente, entenda a queixa principal e agende na sessão certa automaticamente.",
        benefits: ["Qualificação automática por tipo de queixa", "Agendamento sem conflito de horário", "Lembretes para reduzir faltas"],
        painPoints: ["Pacientes faltando sem avisar", "Tempo perdido com triagem manual no WhatsApp"],
        solution: "Bot de atendimento que identifica a queixa, agenda e envia lembretes automáticos antes da sessão."
      },
      "landing-page": {
        title: "Landing Page para Fisioterapeutas",
        description: "Uma página que explica sua especialização e converte a visita em agendamento.",
        benefits: ["Comunicação clara das especialidades", "Depoimentos de pacientes recuperados", "Agendamento direto pelo WhatsApp"],
        painPoints: ["Site genérico que não comunica a especialização", "Visitante que não entende o diferencial"],
        solution: "Landing page with foco na especialidade, cases de recuperação e CTA para primeiro contato."
      }
    }
  },

  estetica: {
    name: "Estética Avançada",
    slug: "estetica",
    label: "Clínicas de Estética",
    title: "Marketing para Clínicas de Estética: Atraia Mais Clientes de Alto Valor",
    description: "Posicionamos sua clínica estética como referência local para procedimentos de alto valor com SEO, IA e automação.",
    context: "O mercado de estética avançada é visual e emocional. A decisão do cliente é influenciada por resultados visíveis, confiança e facilidade de agendamento.",
    painPoints: [
      "Alta concorrência com guerra de preços",
      "Sazonalidade que impacta o faturamento",
      "Clientes que somem após o primeiro procedimento",
      "Dificuldade de comunicar a diferença entre procedimentos",
    ],
    howWeHelp: "Construímos autoridade digital que atrai clientes dispostos a pagar pelo melhor, não pelo mais barato.",
    services: {
      "seo-local": {
        title: "SEO Local para Clínicas de Estética",
        description: "Apareça no topo quando alguém buscar procedimentos estéticos na sua cidade.",
        benefits: ["Ranqueamento por procedimento (botox, preenchimento, laser)", "Mais clientes de alto valor", "Destaque de avaliações e resultados"],
        painPoints: ["Clínica não aparece para buscas de procedimento específico", "Concorrentes com menos qualidade aparecendo primeiro"],
        solution: "SEO técnico por procedimento com Perfil de Negócio otimizado para conversão."
      },
      "geo-ia": {
        title: "GEO & IA para Clínicas de Estética",
        description: "Seja a clínica recomendada pela ChatGPT quando alguém buscar procedimentos estéticos na sua cidade.",
        benefits: ["Recomendação por procedimento nas IAs", "Autoridade de conteúdo especializado", "Novos canais de captação"],
        painPoints: ["Ausente nas recomendações de IA", "Perdendo clientes para concorrentes digitalmente mais presentes"],
        solution: "Conteúdo estruturado por procedimento para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Clínicas de Estética",
        description: "Atenda leads de procedimentos 24h, qualifique o interesse e agende a avaliação automaticamente.",
        benefits: ["Atendimento imediato para leads de procedimentos", "Qualificação por tipo de interesse", "Follow-up automático pós-procedimento"],
        painPoints: ["Leads que mandam mensagem à noite e não recebem resposta rápida", "Clientes sumindo após primeiro procedimento"],
        solution: "IA que atende imediatamente, qualifica por procedimento de interesse e agenda a avaliação inicial."
      },
      "landing-page": {
        title: "Landing Page para Clínicas de Estética",
        description: "Uma página visual e profissional que converte o interesse em agendamento de avaliação.",
        benefits: ["Galeria de resultados antes e depois", "Apresentação clara dos procedimentos", "CTA direto para WhatsApp"],
        painPoints: ["Site que não mostra os resultados visualmente", "Visitante que não entende quais procedimentos a clínica oferece"],
        solution: "Landing page com portfólio visual, descrição de procedimentos e agendamento integrado."
      }
    }
  },

  psicologos: {
    name: "Psicólogos",
    slug: "psicologos",
    label: "Psicólogos",
    title: "Presença Digital Ética e Eficaz para Psicólogos",
    description: "Atraímos pacientes que buscam ativamente por psicólogo na sua cidade, respeitando as normas do CFP.",
    context: "Psicólogos têm restrições éticas na publicidade, mas o digital permite comunicar especialização e gerar confiança de forma legítima e eficaz.",
    painPoints: [
      "Agenda irregular com horários difíceis de preencher",
      "Dependência exclusiva de indicações",
      "Dificuldade de comunicar a abordagem sem parecer apelativo",
      "Estigma que ainda reduz a busca ativa por terapia",
    ],
    howWeHelp: "Posicionamos sua abordagem e especialização para atrair pacientes com o perfil certo para o seu trabalho.",
    services: {
      "seo-local": {
        title: "SEO Local para Psicólogos",
        description: "Apareça quando alguém buscar psicólogo na sua cidade ou abordagem específica.",
        benefits: ["Ranqueamento por abordagem (TCC, psicanálise, EMDR)", "Mais pacientes por busca orgânica", "Autoridade local consolidada"],
        painPoints: ["Consultório invisível no Google", "Pacientes não encontrando sua especialização"],
        solution: "SEO técnico com foco em abordagem terapêutica e especialização, dentro das normas do CFP."
      },
      "geo-ia": {
        title: "GEO & IA para Psicólogos",
        description: "Seja recomendado quando alguém perguntar ao ChatGPT por psicólogo especializado na sua cidade.",
        benefits: ["Recomendação por abordagem nas IAs", "Conteúdo educativo que gera confiança", "Presença no novo canal de busca"],
        painPoints: ["Invisível nas recomendações de IA", "Concorrentes sendo indicados no lugar de você"],
        solution: "Conteúdo of autoridade sobre sua abordagem para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Psicólogos",
        description: "Primeiro contato acolhedor e discreto que qualifica o interesse e agenda a consulta inicial.",
        benefits: ["Primeiro contato imediato e acolhedor", "Agendamento da consulta inicial sem atrito", "Privacidade respeitada na comunicação"],
        painPoints: ["Pacientes que não recebem resposta rápida e desistem", "Dificuldade de gerenciar a agenda manualmente"],
        solution: "Bot acolhedor que responde com empatia, esclarece dúvidas sobre o processo e agenda a primeira sessão."
      },
      "landing-page": {
        title: "Landing Page para Psicólogos",
        description: "Uma presença digital que transmite confiança e comunica sua abordagem com clareza.",
        benefits: ["Comunicação clara da abordagem e especialização", "Transmissão de confiança e segurança", "Agendamento fácil e discreto"],
        painPoints: ["Site genérico que não comunica o diferencial terapêutico", "Visitante que não entende como funciona o processo"],
        solution: "Site com apresentação da abordagem, processo de atendimento e primeiro contato via WhatsApp."
      }
    }
  },

  // ─────────────────────────────────────────────
  // SERVIÇOS PROFISSIONAIS
  // ─────────────────────────────────────────────

  advogados: {
    name: "Advogados",
    slug: "advogados",
    label: "Advogados",
    title: "Autoridade Digital e Captação de Causas para Advogados",
    description: "Posicionamos seu escritório como referência na sua área de atuação, atraindo o cliente certo sem ferir as normas da OAB.",
    context: "A advocacia exige posicionamento sóbrio e de alta autoridade. As restrições da OAB não impedem o digital — exigem que ele seja feito com mais inteligência.",
    painPoints: [
      "Dependência exclusiva de indicações",
      "Dificuldade de prospectar dentro das normas da OAB",
      "Invisibilidade para áreas específicas de atuação",
      "Atendimento inicial lento que perde clientes urgentes",
    ],
    howWeHelp: "Desenvolvemos presença digital que comunica autoridade, especialização e confiança — atraindo o cliente certo para a sua área.",
    services: {
      "seo-local": {
        title: "SEO Local para Escritórios de Advocacia",
        description: "Seja encontrado por quem precisa de assistência jurídica imediata na sua região e área.",
        benefits: ["Ranqueamento por área jurídica específica", "Autoridade local consolidada", "Atração de clientes com necessidade real e urgente"],
        painPoints: ["Escritório difícil de encontrar online", "Perda de clientes para concorrentes digitalmente presentes"],
        solution: "SEO técnico com foco em área jurídica e localização, respeitando as diretrizes de publicidade da OAB."
      },
      "geo-ia": {
        title: "GEO & IA para Advogados",
        description: "Seja o escritório que o ChatGPT recomenda quando alguém buscar advogado especializado na sua cidade.",
        benefits: ["Recomendação por especialidade jurídica nas IAs", "Conteúdo de autoridade que educa e atrai", "Presença nos novos canais de busca"],
        painPoints: ["Escritório ausente das recomendações de IA", "Concorrentes sendo indicados pelo ChatGPT"],
        solution: "Conteúdo jurídico estruturado por área de atuação para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Advogados",
        description: "Primeiro atendimento profissional que qualifica a causa e agenda a consulta inicial automaticamente.",
        benefits: ["Triagem automática por área jurídica", "Agendamento de consulta inicial sem atrito", "Resposta imediata para casos urgentes"],
        painPoints: ["Clientes que precisam de resposta rápida e não conseguem", "Tempo perdido com triagem manual de casos"],
        solution: "Bot profissional que qualifica a necessidade jurídica, informa sobre o processo e agenda a consulta inicial."
      },
      "landing-page": {
        title: "Landing Page para Escritórios de Advocacia",
        description: "Presença digital sóbria e de autoridade que converte a visita em consulta agendada.",
        benefits: ["Comunicação clara das áreas de atuação", "Transmissão de credibilidade e seriedade", "Processo de primeiro contato simples"],
        painPoints: ["Site desatualizado que passa desconfiança", "Visitante que não entende as áreas de atuação do escritório"],
        solution: "Site institucional com foco em autoridade, áreas de especialização e CTA para consulta inicial."
      }
    }
  },

  contabilidades: {
    name: "Contabilidades",
    slug: "contabilidades",
    label: "Contabilidades",
    title: "Marketing Digital para Contabilidades: Atraia Clientes e Reduza o Churn",
    description: "Posicionamos seu escritório contábil como referência local para o tipo de empresa que você quer atender.",
    context: "Contabilidades sofrem com a percepção de commodity. O digital permite comunicar especialização por tipo de empresa e construir autoridade que vai além do preço.",
    painPoints: [
      "Clientes que trocam por qualquer centavo a menos",
      "Dificuldade de atrair empresas de maior porte",
      "Dependência de indicações para crescer",
      "Atendimento inicial lento que perde potenciais clientes",
    ],
    howWeHelp: "Construímos autoridade digital que atrai o cliente certo — aquele que valoriza a qualidade do serviço contábil.",
    services: {
      "seo-local": {
        title: "SEO Local para Contabilidades",
        description: "Apareça quando empresários buscarem contador na sua cidade para o tipo de empresa que você atende.",
        benefits: ["Ranqueamento por tipo de empresa (MEI, Simples, Lucro Real)", "Mais contatos de empresários qualificados", "Autoridade local no segmento contábil"],
        painPoints: ["Escritório invisível no Google", "Atraindo apenas clientes de baixo valor"],
        solution: "SEO técnico com foco em segmento de empresa e localização para atrair o perfil de cliente ideal."
      },
      "geo-ia": {
        title: "GEO & IA para Contabilidades",
        description: "Seja o contador que o ChatGPT recomenda quando um empresário buscar escritório contábil na sua cidade.",
        benefits: ["Recomendação por especialidade nas IAs", "Conteúdo que educa e gera autoridade", "Novos canais de captação de clientes"],
        painPoints: ["Escritório ausente das recomendações de IA", "Perdendo clientes para concorrentes mais presentes no digital"],
        solution: "Conteúdo contábil estruturado por tipo de empresa para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Contabilidades",
        description: "Qualifique o potencial cliente, entenda o porte da empresa e agende a reunião inicial automaticamente.",
        benefits: ["Qualificação automática por tipo de empresa", "Agendamento de reunião inicial sem atrito", "Follow-up automático com leads que não converteram"],
        painPoints: ["Leads que entram em contato e ficam sem resposta rápida", "Tempo perdido com triagem manual"],
        solution: "Bot que qualifica o porte e necessidade da empresa, informa sobre os serviços e agenda a conversa inicial."
      },
      "landing-page": {
        title: "Landing Page para Contabilidades",
        description: "Presença digital que comunica especialização e converte visitas em reuniões agendadas.",
        benefits: ["Comunicação clara dos tipos de empresa atendidos", "Diferencial além do preço evidenciado", "Processo de contato simples e direto"],
        painPoints: ["Site genérico que parece igual a todos os concorrentes", "Visitante que não percebe o diferencial do escritório"],
        solution: "Site com foco em especialização por segmento de empresa e depoimentos de clientes satisfeitos."
      }
    }
  },

  arquitetura: {
    name: "Arquitetura",
    slug: "arquitetura",
    label: "Escritórios de Arquitetura",
    title: "Marketing Digital para Arquitetos: Atraia Projetos de Alto Valor",
    description: "Posicionamos seu escritório para atrair clientes que valorizam o projeto arquitetônico — não apenas o preço do metro quadrado.",
    context: "A decisão por um arquiteto é emocional e visual. O digital é o principal canal onde o potencial cliente pesquisa e forma impressão antes do primeiro contato.",
    painPoints: [
      "Ciclo de venda longo com muita negociação",
      "Clientes que comparam por preço e não por qualidade",
      "Portfólio pouco visível fora do círculo de indicações",
      "Dificuldade de atrair projetos de maior porte",
    ],
    howWeHelp: "Construímos presença digital que valoriza seu portfólio e atrai clientes com o perfil e o orçamento certo.",
    services: {
      "seo-local": {
        title: "SEO Local para Escritórios de Arquitetura",
        description: "Apareça no Google quando alguém buscar arquiteto na sua cidade para o tipo de projeto que você quer executar.",
        benefits: ["Ranqueamento por tipo de projeto (residencial, comercial, reforma)", "Mais contatos de clientes qualificados", "Portfólio visível para quem já está buscando"],
        painPoints: ["Escritório invisível para quem busca arquiteto online", "Atraindo apenas projetos pequenos"],
        solution: "SEO com foco em tipo de projeto e localização, com destaque para o portfólio existente."
      },
      "geo-ia": {
        title: "GEO & IA para Arquitetos",
        description: "Seja o escritório que o ChatGPT recomenda quando alguém buscar arquiteto na sua cidade.",
        benefits: ["Recomendação por especialidade nas IAs", "Conteúdo que comunica seu estilo e método", "Presença nos novos canais de pesquisa"],
        painPoints: ["Escritório ausente das recomendações de IA", "Concorrentes sendo encontrados primeiro"],
        solution: "Conteúdo estruturado sobre estilo, método e portfólio para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Arquitetos",
        description: "Primeiro contato profissional que qualifica o tipo de projeto e agenda a reunião de briefing.",
        benefits: ["Qualificação por tipo e porte do projeto", "Agendamento de briefing sem atrito", "Resposta imediata para leads com urgência"],
        painPoints: ["Leads que entram em contato e esperam muito para receber resposta", "Reuniões de briefing com clientes sem perfil"],
        solution: "Bot que qualifica o tipo de projeto, orçamento estimado e agenda a reunião inicial de forma profissional."
      },
      "landing-page": {
        title: "Landing Page para Escritórios de Arquitetura",
        description: "Vitrine digital que valoriza seu portfólio e converte a admiração em contato.",
        benefits: ["Portfólio visual de alto impacto", "Comunicação clara do estilo e processo", "CTA para briefing inicial"],
        painPoints: ["Site que não valoriza o portfólio adequadamente", "Visitante que admira mas não entra em contato"],
        solution: "Site com portfólio visual, descrição do processo de projeto e CTA direto para conversa inicial."
      }
    }
  },

  veterinarios: {
    name: "Veterinários",
    slug: "veterinarios",
    label: "Clínicas Veterinárias",
    title: "Marketing Digital para Veterinários: Mais Tutores, Agenda Cheia",
    description: "Posicionamos sua clínica veterinária como a referência local para tutores que tratam seus pets como família.",
    context: "Tutores de pets tomam decisões rápidas e emocionais. Quem aparece primeiro no Google Maps com boas avaliações captura o cliente na hora da necessidade.",
    painPoints: [
      "Alta concorrência com grandes redes e petshops",
      "Sazonalidade em procedimentos eletivos",
      "Fidelização baixa sem sistema de relacionamento",
      "Emergências que chegam sem aviso prévio",
    ],
    howWeHelp: "Criamos infraestrutura digital que captura tutores no momento da busca e mantém o relacionamento no longo prazo.",
    services: {
      "seo-local": {
        title: "SEO Local para Clínicas Veterinárias",
        description: "Apareça no Top 3 do Google Maps quando tutores buscarem veterinário na sua região.",
        benefits: ["Ranqueamento para buscas de urgência e rotina", "Mais chamadas e mensagens de novos tutores", "Destaque de especialidades e avaliações"],
        painPoints: ["Clínica invisível nas buscas locais", "Perdendo tutores para redes maiores com mais presença online"],
        solution: "Otimização do Perfil de Negócio e SEO técnico com foco em captação de tutores locais."
      },
      "geo-ia": {
        title: "GEO & IA para Veterinários",
        description: "Seja a clínica que o ChatGPT recomenda quando um tutor buscar veterinário na sua cidade.",
        benefits: ["Recomendação nas IAs para buscas de especialidade", "Conteúdo que educa tutores e gera confiança", "Presença no novo canal de busca"],
        painPoints: ["Clínica ausente das recomendações de IA", "Concorrentes sendo encontrados primeiro"],
        solution: "Conteúdo estruturado sobre especialidades e cuidados pet para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Veterinários",
        description: "Triagem inteligente que identifica urgências, agenda consultas e lembra tutores de vacinas e retornos.",
        benefits: ["Triagem de urgência 24h", "Lembretes automáticos de vacinas e retorno", "Agendamento sem conflito de horário"],
        painPoints: ["Emergências chegando sem aviso", "Tutores que esquecem vacinas e consultas de rotina"],
        solution: "Bot que triagem urgências, agenda consultas e dispara lembretes automáticos de vacinas e retornos."
      },
      "landing-page": {
        title: "Landing Page para Clínicas Veterinárias",
        description: "Presença digital que transmite cuidado e converte tutores em clientes fiéis.",
        benefits: ["Comunicação das especialidades e diferenciais", "Depoimentos de tutores satisfeitos", "Agendamento fácil pelo WhatsApp"],
        painPoints: ["Site que não transmite o amor pelos animais", "Tutor que não encontra informações sobre especialidades"],
        solution: "Site com foco em confiança, especialidades, equipe veterinária e agendamento integrado."
      }
    }
  },

  // ─────────────────────────────────────────────
  // SERVIÇOS LOCAIS
  // ─────────────────────────────────────────────

  oficinas: {
    name: "Oficinas Mecânicas",
    slug: "oficinas",
    label: "Oficinas Mecânicas",
    title: "Marketing Digital para Oficinas Mecânicas: Domine as Buscas Locais",
    description: "Colocamos sua oficina no topo do Google quando motoristas buscarem serviço mecânico na sua região.",
    context: "A decisão por uma oficina é imediata e local. Quem aparece no Top 3 do Google Maps na hora do problema captura o cliente antes de qualquer concorrente.",
    painPoints: [
      "Dependência de clientes de bairro por indicação",
      "Desconfiança do cliente com orçamentos",
      "Sazonalidade em alguns tipos de serviço",
      "Concorrência com redes e franquias",
    ],
    howWeHelp: "Construímos presença digital que captura o motorista no momento em que ele mais precisa e transforma a primeira visita em cliente fiel.",
    services: {
      "seo-local": {
        title: "SEO Local para Oficinas Mecânicas",
        description: "Apareça no Top 3 do Google Maps quando um motorista buscar mecânico na sua região.",
        benefits: ["Ranqueamento para serviços específicos (freio, suspensão, revisão)", "Mais chamadas de novos clientes", "Destaque de avaliações e transparência"],
        painPoints: ["Oficina invisível nas buscas locais", "Clientes indo para redes maiores por falta de visibilidade"],
        solution: "Otimização completa do Perfil de Negócio com foco em serviços de alta demanda e conversão."
      },
      "geo-ia": {
        title: "GEO & IA para Oficinas Mecânicas",
        description: "Seja a oficina que o ChatGPT recomenda quando os motoristas buscarem mecânico na sua cidade.",
        benefits: ["Recomendação por tipo de serviço nas IAs", "Conteúdo que educa e gera confiança", "Presença no novo canal de busca"],
        painPoints: ["Oficina ausente das recomendações de IA", "Concorrentes sendo encontrados no lugar de você"],
        solution: "Conteúdo estruturado sobre serviços mecânicos para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Oficinas Mecânicas",
        description: "Atenda o motorista na hora do problema, qualifique o serviço e agende a entrada do veículo automaticamente.",
        benefits: ["Atendimento imediato para quem está com problema no carro", "Agendamento de entrada do veículo sem telefone", "Orçamento inicial por mensagem"],
        painPoints: ["Motoristas que ligam e não conseguem atendimento", "Agenda bagunçada com entradas sem hora marcada"],
        solution: "Bot que recebe o problema do cliente, informa prazo estimado e agenda a entrada do veículo."
      },
      "landing-page": {
        title: "Landing Page para Oficinas Mecânicas",
        description: "Presença digital que transmite confiança e converte o motorista em cliente.",
        benefits: ["Comunicação clara dos serviços oferecidos", "Avaliações e transparência em destaque", "Agendamento fácil pelo WhatsApp"],
        painPoints: ["Site amador que passa desconfiança", "Motorista que não sabe o que a oficina faz"],
        solution: "Site com serviços, equipe, avaliações reais e CTA direto para WhatsApp."
      }
    }
  },

  petshops: {
    name: "Pet Shops",
    slug: "petshops",
    label: "Pet Shops",
    title: "Marketing Digital para Pet Shops: Atraia Tutores e Fidelize Clientes",
    description: "Posicionamos seu pet shop como referência local para tutores que tratam seus pets como família.",
    context: "O mercado pet cresce consistentemente no Brasil. Tutores são fiéis quando confiam no serviço — e a fidelização começa com a descoberta online.",
    painPoints: [
      "Concorrência com grandes redes e marketplaces",
      "Fidelização baixa sem sistema de relacionamento",
      "Sazonalidade em alguns serviços",
      "Dificuldade de comunicar diferenciais além do preço",
    ],
    howWeHelp: "Criamos presença digital e sistema de relacionamento que atrai novos tutores e mantém os atuais voltando.",
    services: {
      "seo-local": {
        title: "SEO Local para Pet Shops",
        description: "Apareça quando tutores buscarem banho, tosa ou produtos pet na sua cidade.",
        benefits: ["Ranqueamento para banho, tosa e serviços veterinários", "Mais tutores novos por busca orgânica", "Destaque das avaliações e cuidados"],
        painPoints: ["Pet shop invisível nas buscas locais", "Perdendo tutores para redes maiores"],
        solution: "SEO técnico com foco em serviços e localização para atrair tutores qualificados."
      },
      "geo-ia": {
        title: "GEO & IA para Pet Shops",
        description: "Seja o pet shop que o ChatGPT recomenda quando um tutor buscar serviços pet na sua cidade.",
        benefits: ["Recomendação por serviço nas IAs", "Conteúdo que educa tutores", "Presença no novo canal de busca"],
        painPoints: ["Pet shop ausente das recomendações de IA", "Concorrentes sendo encontrados primeiro"],
        solution: "Conteúdo estruturado sobre cuidados pet para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Pet Shops",
        description: "Agende banho e tosa, envie lembretes e mantenha o tutor engajado automaticamente.",
        benefits: ["Agendamento de banho e tosa 24h", "Lembretes automáticos para não perder clientes", "Promoções via WhatsApp para reativação"],
        painPoints: ["Tutores que esquecem de agendar", "Agenda bagunçada com conflitos de horário"],
        solution: "Bot que agenda, confirma, lembra e reativa tutores inativos com promoções automáticas."
      },
      "landing-page": {
        title: "Landing Page para Pet Shops",
        description: "Presença digital que transmite amor pelos animais e converte visitas em agendamentos.",
        benefits: ["Fotos dos pets atendidos em destaque", "Serviços e preços comunicados com clareza", "Agendamento fácil pelo WhatsApp"],
        painPoints: ["Site que não transmite o cuidado com os animais", "Tutor que não encontra como agendar facilmente"],
        solution: "Site com galeria de pets, serviços, equipe e agendamento integrado ao WhatsApp."
      }
    }
  },

  escolas: {
    name: "Escolas & Cursos",
    slug: "escolas",
    label: "Escolas e Cursos",
    title: "Marketing Digital para Escolas e Cursos: Mais Matrículas, Menos Sazonalidade",
    description: "Atraímos alunos qualificados para sua escola ou curso durante todo o ano, reduzindo a dependência de períodos de matrícula.",
    context: "A decisão por uma escola envolve pais e alunos com critérios diferentes. O digital é onde essa pesquisa começa — e quem aparece primeiro com conteúdo de qualidade captura a atenção.",
    painPoints: [
      "Sazonalidade intensa nas matrículas",
      "Alto custo de aquisição por aluno",
      "Dificuldade de comunicar diferenciais pedagógicos",
      "Concorrência com grandes redes e EAD",
    ],
    howWeHelp: "Construímos presença digital que atrai interessados durante todo o ano e converte a curiosidade em matrícula.",
    services: {
      "seo-local": {
        title: "SEO Local para Escolas e Cursos",
        description: "Apareça quando pais e alunos buscarem escola ou curso na sua cidade.",
        benefits: ["Ranqueamento durante todo o ano, não só na época de matrícula", "Mais contatos de interessados qualificados", "Autoridade local no segmento educacional"],
        painPoints: ["Escola invisível fora do período de matrícula", "Perdendo alunos para concorrentes com mais presença online"],
        solution: "SEO técnico com foco em segmento educacional e localização para captação contínua de interessados."
      },
      "geo-ia": {
        title: "GEO & IA para Escolas e Cursos",
        description: "Seja a escola que o ChatGPT recomenda quando alguém buscar opções educacionais na sua cidade.",
        benefits: ["Recomendação por tipo de curso nas IAs", "Conteúdo educativo que atrai pais e alunos", "Presença no novo canal de pesquisa"],
        painPoints: ["Escola ausente das recomendações de IA", "Concorrentes sendo encontrados primeiro"],
        solution: "Conteúdo estruturado sobre metodologia e resultados para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Escolas e Cursos",
        description: "Atenda interessados 24h, qualifique o interesse e agende a visita ou aula experimental automaticamente.",
        benefits: ["Atendimento imediato para pais e alunos interessados", "Agendamento de visita ou aula experimental", "Follow-up automático com leads frios"],
        painPoints: ["Interessados que entram em contato e não recebem resposta rápida", "Leads esquecidos durante o período entre matrículas"],
        solution: "Bot que qualifica o interesse, informa sobre o curso e agenda a visita ou aula experimental."
      },
      "landing-page": {
        title: "Landing Page para Escolas e Cursos",
        description: "Presença digital que comunica diferenciais e converte visitas em matrículas.",
        benefits: ["Comunicação clara da metodologia e resultados", "Depoimentos de alunos e responsáveis", "Processo de matrícula simplificado"],
        painPoints: ["Site que não comunica o diferencial pedagógico", "Processo de matrícula confuso e burocrático"],
        solution: "Site com metodologia, resultados, depoimentos e CTA direto para agendamento de visita."
      }
    }
  },

  restaurantes: {
    name: "Restaurantes",
    slug: "restaurantes",
    label: "Restaurantes",
    title: "Marketing Digital para Restaurantes: Mais Clientes, Menos iFood",
    description: "Atraímos clientes diretamente pelo Google e WhatsApp, reduzindo a dependência de plataformas de delivery que comem sua margem.",
    context: "A busca por restaurante é imediata e local. Quem aparece no Top 3 do Google Maps na hora da fome captura o cliente antes de qualquer concorrente.",
    painPoints: [
      "Alta dependência do iFood com taxas que comprimem a margem",
      "Sazonalidade em dias da semana e horários",
      "Clientes que não voltam sem incentivo",
      "Fila de espera mal gerenciada que afasta clientes",
    ],
    howWeHelp: "Construímos canal direto de captação que atrai clientes pelo Google e os fideliza pelo WhatsApp, sem pagar taxa para intermediários.",
    services: {
      "seo-local": {
        title: "SEO Local para Restaurantes",
        description: "Apareça no Top 3 do Google Maps quando alguém buscar onde comer na sua cidade.",
        benefits: ["Ranqueamento para buscas de culinária específica", "Mais clientes sem pagar comissão de plataforma", "Destaque de avaliações e fotos dos pratos"],
        painPoints: ["Restaurante invisível para quem busca no Google", "Dependência total de plataformas de delivery"],
        solution: "Otimização do Perfil de Negócio com foco em captação direta de clientes sem intermediários."
      },
      "geo-ia": {
        title: "GEO & IA para Restaurantes",
        description: "Seja o restaurante que o ChatGPT recomenda quando alguém buscar onde comer na sua cidade.",
        benefits: ["Recomendação por tipo de culinária nas IAs", "Conteúdo que destaca pratos e experiência", "Presença no novo canal de busca"],
        painPoints: ["Restaurante ausente das recomendações de IA", "Concorrentes sendo indicados no lugar de você"],
        solution: "Conteúdo estruturado sobre culinária, ambiente e experiência para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Restaurantes",
        description: "Receba reservas, responda sobre cardápio e gerencie pedidos pelo WhatsApp sem precisar tirar o olho da cozinha.",
        benefits: ["Reservas automáticas pelo WhatsApp", "Cardápio digital enviado automaticamente", "Fidelização com promoções para clientes recorrentes"],
        painPoints: ["Telefone que não para de tocar durante o rush", "Clientes que pedem cardápio e não recebem resposta rápida"],
        solution: "Bot que responde sobre cardápio, recebe reservas e programa promoções de fidelidade automáticas."
      },
      "landing-page": {
        title: "Landing Page para Restaurantes",
        description: "Presença digital que abre o apetite e converte a visita em reserva.",
        benefits: ["Fotos profissionais dos pratos em destaque", "Cardápio digital integrado", "Reserva direta pelo WhatsApp"],
        painPoints: ["Site sem fotos que não desperta desejo", "Cliente que não sabe como fazer reserva"],
        solution: "Site com galeria de pratos, cardápio, horários e CTA para reserva via WhatsApp."
      }
    }
  },

  saloes: {
    name: "Salões de Beleza",
    slug: "saloes",
    label: "Salões de Beleza",
    title: "Marketing Digital para Salões de Beleza: Agenda Cheia o Ano Todo",
    description: "Atraímos novos clientes e fidelizamos os atuais com SEO, IA e automação de agendamento.",
    context: "O cliente de salão é fiel quando satisfeito — mas precisa ser lembrado. O digital é o canal que atrai novos e mantém os atuais voltando.",
    painPoints: [
      "Cancelamentos de última hora que deixam horários vazios",
      "Clientes que somem após algumas visitas",
      "Dificuldade de preencher horários da manhã e dias de semana",
      "Dependência de grupos de WhatsApp para agendamento manual",
    ],
    howWeHelp: "Criamos sistema de captação e fidelização que mantém a agenda cheia e reduz cancelamentos.",
    services: {
      "seo-local": {
        title: "SEO Local para Salões de Beleza",
        description: "Apareça quando alguém buscar salão de beleza ou cabeleireiro na sua cidade.",
        benefits: ["Ranqueamento para serviços específicos (coloração, progressiva, corte)", "Mais clientes novos por busca orgânica", "Destaque de avaliações e fotos dos resultados"],
        painPoints: ["Salão invisível nas buscas locais", "Perdendo clientes para concorrentes mais visíveis online"],
        solution: "SEO técnico with foco em serviços e localização para captação de novos clientes."
      },
      "geo-ia": {
        title: "GEO & IA para Salões de Beleza",
        description: "Seja o salão que o ChatGPT recomenda quando alguém buscar cabeleireiro na sua cidade.",
        benefits: ["Recomendação por especialidade nas IAs", "Conteúdo que mostra resultados e técnicas", "Presença no novo canal de busca"],
        painPoints: ["Salão ausente das recomendações de IA", "Concorrentes sendo encontrados primeiro"],
        solution: "Conteúdo estruturado sobre técnicas e resultados para reconhecimento pelas IAs generativas."
      },
      "automacao-whatsapp": {
        title: "Automação de WhatsApp para Salões de Beleza",
        description: "Agende, confirme, lembre e reative clientes automaticamente — sem grupo de WhatsApp bagunçado.",
        benefits: ["Agendamento 24h sem intervenção manual", "Confirmação automática 24h antes para reduzir faltas", "Reativação automática de clientes inativos"],
        painPoints: ["Cancelamentos de última hora que deixam buracos na agenda", "Clientes que somem e não voltam"],
        solution: "Bot que agenda, confirma, lembra e reativa clientes com promoções personalizadas automaticamente."
      },
      "landing-page": {
        title: "Landing Page para Salões de Beleza",
        description: "Presença digital que mostra seus trabalhos e converte visitas em agendamentos.",
        benefits: ["Galeria de trabalhos realizados em destaque", "Serviços e profissionais apresentados", "Agendamento fácil pelo WhatsApp"],
        painPoints: ["Site que não mostra a qualidade dos trabalhos", "Cliente que não sabe como agendar online"],
        solution: "Site com portfólio, equipe, serviços e agendamento integrado ao WhatsApp."
      }
    }
  }
};