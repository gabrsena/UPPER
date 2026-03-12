export interface FAQItem {
  question: string;
  answer: string;
}

export const nicheFAQData: Record<string, Record<string, FAQItem[]>> = {

  // ─────────────────────────────────────────────
  // DENTISTAS
  // ─────────────────────────────────────────────
  dentistas: {
    "seo-local": [
      {
        question: "Quanto tempo leva para um consultório odontológico aparecer no Top 3 do Google Maps?",
        answer: "Em média entre 30 e 90 dias, dependendo da concorrência na cidade e do estado atual do Perfil de Negócio. Consultórios sem otimização nenhuma costumam ver os primeiros resultados em 45 dias."
      },
      {
        question: "SEO local para dentistas funciona para procedimentos específicos como implante ou ortodontia?",
        answer: "Sim. O SEO local permite ranquear para buscas específicas como 'implante dentário em Sorocaba' ou 'ortodontista em Itu', atraindo pacientes com intenção de compra já definida — não apenas quem está pesquisando genericamente."
      },
      {
        question: "Preciso ter site para fazer SEO local para o meu consultório?",
        answer: "Não obrigatoriamente. O Google Maps funciona pelo Perfil de Negócio, que pode ranquear independentemente. Porém, ter um site otimizado aumenta significativamente a autoridade e a conversão de quem encontra o consultório."
      },
      {
        question: "Como as avaliações no Google afetam o ranqueamento do consultório?",
        answer: "Avaliações são um dos principais fatores de ranqueamento local. Volume, frequência e respostas às avaliações impactam diretamente a posição no Maps. Um consultório com 50 avaliações recentes tende a aparecer antes de um com 200 avaliações antigas."
      },
      {
        question: "Vale a pena investir em SEO local se já invisto em Google Ads para o consultório?",
        answer: "Sim. SEO e Ads são complementares. O Ads garante visibilidade imediata enquanto o SEO constrói presença orgânica permanente. No longo prazo, o SEO reduz o custo por paciente adquirido porque não depende de orçamento diário."
      }
    ],
    "geo-ia": [
      {
        question: "O que é GEO e por que dentistas precisam disso em 2026?",
        answer: "GEO é a otimização para que IAs como ChatGPT e Gemini recomendem seu consultório quando alguém perguntar por dentista na sua cidade. Em 2026, uma parcela crescente dos pacientes pesquisa direto na IA antes de ir ao Google — estar ausente nesse canal significa perder esses pacientes para concorrentes."
      },
      {
        question: "Como o ChatGPT decide qual dentista recomendar em uma cidade?",
        answer: "O ChatGPT e outras IAs analisam dados estruturados disponíveis na web, avaliações, menções em conteúdo e autoridade do domínio. Consultórios com dados bem estruturados, boas avaliações e conteúdo relevante têm muito mais chance de serem citados."
      },
      {
        question: "Quanto tempo leva para meu consultório ser recomendado pelo Gemini ou ChatGPT?",
        answer: "O processo de reconhecimento pelas IAs leva entre 60 e 120 dias após a implementação da estrutura de dados correta. As IAs atualizam suas bases periodicamente, então a presença vai crescendo gradualmente."
      },
      {
        question: "GEO substitui o SEO local para dentistas?",
        answer: "Não — eles são complementares. O SEO local garante presença no Google Maps e na busca tradicional. O GEO garante presença nas IAs generativas. Em 2026, um consultório precisa dos dois para cobrir todos os canais onde o paciente pesquisa."
      },
      {
        question: "Preciso criar conteúdo novo para otimizar meu consultório para IA?",
        answer: "Sim, mas de forma estruturada. As IAs priorizam conteúdo que responde perguntas específicas com clareza — como FAQs sobre procedimentos, explicações sobre o processo de atendimento e dados concretos sobre o consultório. Esse conteúdo serve ao mesmo tempo para SEO e GEO."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Um chatbot de WhatsApp consegue responder perguntas sobre valores de procedimentos odontológicos?",
        answer: "Sim. O bot pode ser configurado para informar faixas de preço, explicar que o valor exato depende de avaliação, e já direcionar para o agendamento da consulta de diagnóstico — que é o objetivo real da conversa."
      },
      {
        question: "A automação de WhatsApp substitui a recepcionista do consultório?",
        answer: "Não substitui — filtra. O bot atende as perguntas repetitivas, qualifica o paciente e agenda. A recepcionista foca nos pacientes que já chegam qualificados e nas situações que exigem atendimento humano."
      },
      {
        question: "Preciso do WhatsApp Business API para automatizar o atendimento do consultório?",
        answer: "Sim. O app gratuito do WhatsApp Business tem automações básicas, mas sem IA e sem múltiplos atendentes. Para um sistema de qualificação e agendamento automático, a API oficial é necessária."
      },
      {
        question: "O bot consegue integrar com minha agenda de consultas?",
        answer: "Sim, dependendo do sistema que você usa. A integração mais comum é com Google Agenda. Sistemas de gestão odontológica específicos podem requerer integrações via Zapier ou desenvolvimento customizado."
      },
      {
        question: "Quanto tempo leva para configurar a automação de WhatsApp para um consultório odontológico?",
        answer: "Entre 3 e 7 dias úteis para configuração completa, incluindo os fluxos de qualificação por procedimento, integração com agenda e testes de funcionamento."
      }
    ],
    "landing-page": [
      {
        question: "Uma landing page para dentista precisa ter os preços dos procedimentos?",
        answer: "Não obrigatoriamente. Mostrar faixas de preço aumenta a qualificação dos leads, mas muitos consultórios preferem não expor valores para negociar caso a caso. O mais importante é ter um CTA claro para agendamento ou consulta de diagnóstico."
      },
      {
        question: "Qual a diferença entre um site institucional e uma landing page para dentistas?",
        answer: "O site institucional apresenta o consultório completo com múltiplas páginas. A landing page é focada em um único objetivo — geralmente capturar o contato do paciente interessado em um procedimento específico. Para campanhas de procedimentos de alto valor como implante, a landing page converte melhor."
      },
      {
        question: "Fotos reais do consultório fazem diferença na conversão da landing page?",
        answer: "Sim, muito. Fotos reais do ambiente, da equipe e dos equipamentos aumentam significativamente a confiança do paciente. Imagens de banco são percebidas como genéricas e reduzem a credibilidade."
      },
      {
        question: "Quanto tempo leva para uma landing page de dentista começar a gerar resultados?",
        answer: "Resultados imediatos se combinada com tráfego pago. Para tráfego orgânico via SEO, entre 30 e 90 dias para começar a ranquear. A landing page em si converte a partir do momento em que recebe visitas."
      },
      {
        question: "A landing page precisa ser diferente para cada procedimento odontológico?",
        answer: "Para campanhas específicas de alto valor (implante, invisalign, facetas), uma landing page exclusiva por procedimento converte melhor que uma página genérica. Para o site principal do consultório, uma página bem estruturada cobrindo todos os procedimentos já é suficiente."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CLÍNICAS MÉDICAS
  // ─────────────────────────────────────────────
  clinicas: {
    "seo-local": [
      {
        question: "Como uma clínica médica pode ranquear para especialidades específicas no Google?",
        answer: "Criando páginas dedicadas por especialidade com conteúdo técnico relevante, otimizando o Perfil de Negócio com as especialidades corretas e construindo autoridade com avaliações de pacientes que mencionam as especialidades atendidas."
      },
      {
        question: "SEO local ajuda clínicas a atrair mais pacientes particulares?",
        answer: "Sim. O SEO local permite segmentar por especialidade e tipo de atendimento, atraindo pacientes que buscam ativamente por determinado serviço — que geralmente são pacientes particulares ou com planos específicos, não apenas quem aceita qualquer convênio."
      },
      {
        question: "Quantas avaliações no Google uma clínica médica precisa para ranquear bem?",
        answer: "Não existe um número fixo, mas clínicas com mais de 30 avaliações recentes e nota acima de 4.5 têm vantagem significativa. Mais importante que o volume é a frequência — avaliações recentes pesam mais que avaliações antigas."
      },
      {
        question: "Clínicas com vários médicos precisam de um perfil do Google para cada profissional?",
        answer: "Depende. Se os médicos atendem no mesmo endereço, um perfil da clínica bem otimizado é suficiente. Se algum médico tem consultório próprio em outro endereço, um perfil separado faz sentido. Criar múltiplos perfis para o mesmo endereço pode gerar penalização."
      },
      {
        question: "Qual a diferença entre SEO local e SEO orgânico para clínicas médicas?",
        answer: "SEO local foca no ranqueamento no Google Maps e nos resultados locais — quando alguém busca 'clínica cardiologista Sorocaba'. SEO orgânico foca nas posições do site nos resultados de busca — quando alguém busca 'sintomas de problemas cardíacos'. Os dois se complementam."
      }
    ],
    "geo-ia": [
      {
        question: "As IAs como ChatGPT recomendam clínicas médicas por especialidade?",
        answer: "Sim. Quando alguém pergunta ao ChatGPT por cardiologista ou endocrinologista em uma cidade, a IA busca informações estruturadas disponíveis na web. Clínicas com dados bem organizados, especialidades claras e conteúdo relevante têm muito mais chance de aparecer."
      },
      {
        question: "Conteúdo médico gerado por IA pode ajudar no ranqueamento por IAs?",
        answer: "Conteúdo de qualidade sobre especialidades e procedimentos ajuda — independente de como foi produzido. O importante é que seja preciso, útil e responda perguntas reais dos pacientes. Conteúdo genérico não gera autoridade."
      },
      {
        question: "O Google E-E-A-T afeta como as IAs recomendam clínicas médicas?",
        answer: "Sim. O E-E-A-T (Experiência, Especialização, Autoridade e Confiabilidade) é um dos critérios que as IAs usam para avaliar fontes médicas. Clínicas com médicos com currículo publicado, certificações visíveis e conteúdo assinado têm mais autoridade."
      },
      {
        question: "Quanto conteúdo uma clínica médica precisa produzir para ser recomendada por IA?",
        answer: "Qualidade vale mais que quantidade. Uma página bem estruturada por especialidade, com FAQ claro e dados do médico responsável, já contribui significativamente para o reconhecimento pelas IAs."
      },
      {
        question: "GEO é seguro para clínicas médicas dentro das normas do CFM?",
        answer: "Sim. GEO é otimização de dados e conteúdo — não é publicidade enganosa. Estruturar informações sobre especialidades, equipe e procedimentos dentro das normas do CFM é totalmente compatível com a otimização para IAs."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Uma IA no WhatsApp consegue fazer triagem de pacientes por especialidade médica?",
        answer: "Sim. O bot pode ser configurado para identificar a necessidade do paciente, direcionar para a especialidade correta e agendar com o médico certo — reduzindo o trabalho da recepção e eliminando erros de encaminhamento."
      },
      {
        question: "A automação de WhatsApp funciona para clínicas com múltiplos médicos e agendas diferentes?",
        answer: "Sim, com a integração correta. O sistema consegue verificar disponibilidade por médico e especialidade, apresentar opções de horário e confirmar o agendamento — tudo automaticamente."
      },
      {
        question: "Como lidar com casos de urgência no WhatsApp automatizado de uma clínica médica?",
        answer: "O bot deve ser configurado para identificar agora palavras de urgência e acionar imediatamente o atendimento humano ou fornecer orientação para procurar pronto-socorro. Nunca deixar um caso urgente no fluxo automático sem saída."
      },
      {
        question: "A automação de WhatsApp respeita a LGPD para dados de saúde?",
        answer: "Sim, desde que configurada corretamente. As plataformas de API oficial do WhatsApp são compatíveis com LGPD. O consentimento do paciente para comunicação via WhatsApp deve ser registrado no momento do cadastro."
      },
      {
        question: "Lembretes automáticos de consulta reduzem as faltas em clínicas médicas?",
        answer: "Sim, significativamente. Clínicas que implementam lembretes automáticos 48h e 2h antes da consulta relatam redução de 30 a 50% nas faltas sem aviso prévio."
      }
    ],
    "landing-page": [
      {
        question: "Uma clínica médica precisa de uma landing page por especialidade ou uma página geral?",
        answer: "Para captação via tráfego pago, landing pages específicas por especialidade convertem melhor. Para presença orgânica e institucional, uma página geral bem estruturada com seções por especialidade é suficiente e mais fácil de manter."
      },
      {
        question: "Quais elementos são essenciais em uma landing page de clínica médica para gerar confiança?",
        answer: "Fotos reais dos médicos com CRM visível, formação e especialização, avaliações de pacientes, estrutura do espaço físico, convênios aceitos e processo claro de agendamento. A confiança é o principal fator de conversão em saúde."
      },
      {
        question: "Como a velocidade do site afeta o agendamento em clínicas médicas online?",
        answer: "Diretamente. Um site que demora mais de 3 segundos para carregar perde em média 40% dos visitantes antes mesmo de exibir o conteúdo. Em mobile — onde a maioria das buscas acontece — a velocidade é ainda mais crítica."
      },
      {
        question: "Vale a pena ter agendamento online integrado na landing page da clínica?",
        answer: "Sim. Agendamento online reduz a fricção do processo e funciona 24h. Pacientes que encontram a clínica fora do horário comercial podem agendar imediatamente, sem precisar ligar no dia seguinte — quando já podem ter esquecido ou escolhido outro lugar."
      },
      {
        question: "A landing page de uma clínica médica pode mostrar os preços das consultas?",
        answer: "Pode, mas com cuidado. Mostrar o valor da consulta particular pode qualificar melhor os leads e reduzir perguntas repetitivas. Para procedimentos complexos, é mais indicado direcionar para avaliação — onde o valor é discutido após o diagnóstico."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // FISIOTERAPEUTAS
  // ─────────────────────────────────────────────
  fisioterapeutas: {
    "seo-local": [
      {
        question: "Como fisioterapeutas podem ranquear para especialidades como RPG ou pilates clínico no Google?",
        answer: "Criando conteúdo específico sobre cada técnica, otimizando o Perfil de Negócio com as especialidades corretas e usando palavras-chave como 'RPG Sorocaba' ou 'pilates clínico Itu' nas páginas do site e nas descrições do perfil."
      },
      {
        question: "SEO local ajuda fisioterapeutas a reduzirem a dependência de encaminhamentos médicos?",
        answer: "Sim. O SEO local cria um canal direto com o paciente que já está buscando ativamente o serviço — sem precisar de encaminhamento. Isso diversifica as fontes de novos pacientes e reduz a vulnerabilidade a mudanças de parceiros médicos."
      },
      {
        question: "Quanto tempo leva para uma clínica de fisioterapia aparecer no Google Maps?",
        answer: "Entre 30 e 90 dias com otimização ativa do Perfil de Negócio. Clínicas com Perfil bem preenchido, fotos reais e avaliações recentes tendem a ranquear mais rápido."
      },
      {
        question: "Fisioterapeutas autônomos sem clínica física podem fazer SEO local?",
        answer: "Sim, com restrições. O Google permite cadastro de área de atendimento sem endereço físico público. Porém, ter um endereço físico verificado tende a gerar melhor ranqueamento no Maps."
      },
      {
        question: "Como diferenciar minha clínica de fisioterapia de concorrentes no Google?",
        answer: "Especializando a comunicação — em vez de 'fisioterapia geral', posicionar como 'especialista em reabilitação esportiva' ou 'fisioterapia ortopédica pós-cirurgia'. Nicho específico ranqueia melhor e atrai o paciente certo."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda fisioterapeutas por especialidade quando perguntado?",
        answer: "Sim. Quando alguém pergunta ao ChatGPT por fisioterapeuta especializado em coluna ou reabilitação esportiva em uma cidade, a IA busca profissionais com dados estruturados e conteúdo relevante sobre aquela especialidade."
      },
      {
        question: "Conteúdo educativo sobre técnicas de fisioterapia ajuda no ranqueamento por IA?",
        answer: "Muito. Artigos que explicam técnicas como RPG, Pilates Clínico ou Cinesioterapia com clareza são exatamente o tipo de conteúdo que as IAs citam como referência quando respondem perguntas sobre fisioterapia."
      },
      {
        question: "Como estruturar o site de uma clínica de fisioterapia para ser recomendado por IA?",
        answer: "Com páginas dedicadas por especialidade, FAQ claro sobre cada técnica e condição tratada, dados do profissional responsável e schema markup estruturado. Quanto mais específico e bem organizado, mais fácil para a IA processar e recomendar."
      },
      {
        question: "GEO é relevante para fisioterapeutas em cidades menores?",
        answer: "Sim, e pode ser ainda mais vantajoso. Em cidades menores, a concorrência por visibilidade nas IAs é menor — os primeiros a estruturar corretamente dominam antes que os concorrentes percebam a oportunidade."
      },
      {
        question: "Fisioterapeutas precisam de um blog ativo para serem recomendados por IA?",
        answer: "Um blog ajuda, mas não é obrigatório. Páginas bem estruturadas por especialidade com FAQ detalhado já contribuem significativamente. O blog acelera o processo de reconhecimento ao gerar mais conteúdo indexável."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como um bot de WhatsApp pode ajudar na triagem de pacientes de fisioterapia?",
        answer: "O bot pode perguntar sobre a queixa principal, tempo de sintoma e se há encaminhamento médico — qualificando o paciente antes do primeiro atendimento e já direcionando para a agenda do especialista correto."
      },
      {
        question: "Automação de WhatsApp reduz faltas nas sessões de fisioterapia?",
        answer: "Sim. Lembretes automáticos 24h antes da sessão reduzem significativamente as faltas. O bot pode também perguntar confirmação e reagendar automaticamente quando o paciente cancela com antecedência."
      },
      {
        question: "É possível automatizar o acompanhamento pós-alta de pacientes de fisioterapia?",
        answer: "Sim. O bot pode enviar exercícios de manutenção, checar a evolução do paciente e sugerir retorno preventivo — mantendo o relacionamento ativo mesmo depois do término do tratamento."
      },
      {
        question: "Quanto tempo leva para implementar automação de WhatsApp em uma clínica de fisioterapia?",
        answer: "Entre 3 e 7 dias úteis para configuração dos fluxos principais de triagem, agendamento e lembretes."
      },
      {
        question: "A automação de WhatsApp funciona para fisioterapeutas que atendem por convênio e particular?",
        answer: "Sim. O bot pode identificar desde o início se o atendimento é por convênio ou particular, direcionar para o fluxo correto e informar sobre documentação necessária — antes mesmo do primeiro contato humano."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de uma clínica de fisioterapia para gerar agendamentos?",
        answer: "Especialidades com descrição clara, credenciais do fisioterapeuta, depoimentos de pacientes recuperados, fotos reais da estrutura e equipamentos, e um CTA claro para agendamento ou avaliação inicial."
      },
      {
        question: "Vale a pena ter uma página por especialidade em uma clínica de fisioterapia?",
        answer: "Sim, especialmente para SEO. Uma página dedicada a 'fisioterapia esportiva em Sorocaba' ranqueia muito melhor que uma página geral que menciona todas as especialidades superficialmente."
      },
      {
        question: "Como apresentar as técnicas de fisioterapia no site de forma que o paciente entenda?",
        answer: "Usando linguagem simples que explica o benefício antes da técnica. Em vez de 'RPG — Reeducação Postural Global', começar com 'Correção de postura e alívio de dores crônicas — saiba como funciona'. O paciente busca pelo problema, não pela técnica."
      },
      {
        question: "Vídeos de exercícios no site de fisioterapia ajudam na conversão?",
        answer: "Sim. Vídeos curtos demonstrando exercícios ou o processo de atendimento aumentam o tempo de permanência no site, geram confiança e melhoram o ranqueamento no Google."
      },
      {
        question: "Como mostrar resultados de tratamentos de fisioterapia no site de forma ética?",
        answer: "Com depoimentos em texto ou vídeo de pacientes reais, com autorização documentada. Casos clínicos podem ser apresentados de forma anônima descrevendo a condição e o resultado. Evitar prometer cura ou resultados garantidos."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // ESTÉTICA
  // ─────────────────────────────────────────────
  estetica: {
    "seo-local": [
      {
        question: "Como clínicas de estética podem ranquear para procedimentos específicos no Google Maps?",
        answer: "Criando categorias específicas no Perfil de Negócio, publicando fotos de antes e depois dos procedimentos, acumulando avaliações que mencionam os procedimentos pelo nome e criando páginas dedicadas no site para cada procedimento de alto valor."
      },
      {
        question: "SEO local funciona para clínicas de estética avançada com procedimentos de alto ticket?",
        answer: "Sim, e é especialmente eficaz. Quem busca 'harmonização facial Sorocaba' ou 'botox Itu' já tem intenção de compra definida. Capturar esse tráfego orgânico elimina o custo de aquisição de plataformas de anúncio."
      },
      {
        question: "Quantas fotos uma clínica de estética deve ter no Perfil do Google para ranquear bem?",
        answer: "Mínimo de 20 fotos de qualidade, com atualização mensal. Fotos do ambiente, da equipe, dos equipamentos e de resultados de procedimentos (com autorização). Perfis com mais fotos recentes têm desempenho significativamente melhor."
      },
      {
        question: "A sazonalidade afeta o SEO de clínicas de estética?",
        answer: "Sim. Procedimentos como criolipólise têm pico de busca no primeiro trimestre e redução no inverno. Uma estratégia de SEO antecipa essa sazonalidade com conteúdo preparatório — artigos sobre preparação para o verão publicados em setembro ranqueiam quando a demanda aumenta."
      },
      {
        question: "Como se diferenciar de clínicas de estética concorrentes no Google?",
        answer: "Especializando a comunicação em procedimentos de alto valor onde você tem mais expertise, acumulando avaliações com menção a resultados específicos e produzindo conteúdo educativo sobre os procedimentos que mais realiza."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda clínicas de estética quando alguém pergunta por procedimentos?",
        answer: "Sim. Quando alguém pergunta ao ChatGPT por 'melhor clínica de harmonização facial em Sorocaba', a IA busca estabelecimentos com dados bem estruturados, boas avaliações e conteúdo relevante sobre o procedimento."
      },
      {
        question: "Como criar conteúdo sobre procedimentos estéticos que seja citado pelas IAs?",
        answer: "Com artigos que explicam o procedimento de forma clara — como funciona, quem é indicado, quanto dura o resultado, cuidados pós-procedimento. Esse formato de FAQ sobre procedimentos é exatamente o que as IAs extraem e recomendam."
      },
      {
        question: "GEO ajuda clínicas de estética a se diferenciarem no mercado digital?",
        answer: "Sim. A maioria das clínicas de estética ainda não investe em otimização para IA. As primeiras a estruturar corretamente vão dominar esse canal antes da concorrência perceber a oportunidade."
      },
      {
        question: "Antes e depois de procedimentos estéticos podem ser usados no GEO?",
        answer: "As IAs não processam imagens diretamente, mas descrições textuais de resultados — como 'paciente com melhora de X% na firmeza da pele após Y sessões' — são conteúdo valioso para o reconhecimento pelas IAs."
      },
      {
        question: "Preciso de um profissional médico para criar conteúdo de GEO em clínica de estética?",
        answer: "Para procedimentos que exigem médico (como toxina botulínica), o conteúdo deve ser assinado pelo responsável técnico. Isso aumenta a autoridade percebida pelas IAs e está alinhado com as normas do CFM e do CRF."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como usar automação de WhatsApp para converter leads de procedimentos estéticos de alto valor?",
        answer: "O bot qualifica o interesse pelo procedimento, envia informações e fotos de resultados, agenda a avaliação inicial e faz follow-up automático com quem não respondeu — sem perder o timing em que o lead estava mais interessado."
      },
      {
        question: "É possível enviar fotos de antes e depois pelo WhatsApp automatizado?",
        answer: "Sim. O bot pode enviar um portfólio de resultados em formato de mídia pelo WhatsApp, mediante autorização, como parte do fluxo de qualificação do lead interessado em um procedimento específico."
      },
      {
        question: "Como usar o WhatsApp para fidelizar clientes de clínica de estética?",
        answer: "Com mensagens automáticas de acompanhamento pós-procedimento, lembretes de retorno para manutenção, avisos de novos procedimentos disponíveis e promoções exclusivas para clientes recorrentes."
      },
      {
        question: "Automação de WhatsApp funciona para clínicas de estética com lista de espera?",
        answer: "Sim. O bot pode gerenciar lista de espera automaticamente — notificando o próximo da fila quando um horário é cancelado, sem intervenção manual."
      },
      {
        question: "Quanto tempo economiza a automação de WhatsApp em uma clínica de estética?",
        answer: "Em média 2 a 4 horas por dia de trabalho administrativo — tempo gasto respondendo perguntas repetitivas, confirmando agendamentos e fazendo follow-up manual de leads."
      }
    ],
    "landing-page": [
      {
        question: "O que não pode faltar na landing page de uma clínica de estética para converter bem?",
        answer: "Galeria de resultados reais, descrição clara dos procedimentos com expectativas realistas, credenciais da equipe, avaliações de clientes, processo de agendamento simples e um CTA direto para avaliação inicial gratuita ou com desconto."
      },
      {
        question: "Vale mais investir em landing page por procedimento ou em um site geral para clínica de estética?",
        answer: "Para procedimentos de alto ticket como harmonização, implante capilar ou lipo LAD, landing pages específicas por procedimento convertem melhor em campanhas pagas. Para presença orgânica e SEO, um site bem estruturado com páginas por procedimento é o ideal."
      },
      {
        question: "Como apresentar preços de procedimentos estéticos no site sem afastar clientes?",
        answer: "Com faixas de preço acompanhadas de contexto — 'a partir de R$ X, dependendo da área tratada e número de sessões'. Isso qualifica o lead sem fechar a negociação antes da avaliação."
      },
      {
        question: "Depoimentos em vídeo funcionam melhor que depoimentos em texto para clínicas de estética?",
        answer: "Sim, especialmente para procedimentos de transformação física. Um vídeo de 30 segundos de um cliente satisfeito tem impacto emocional muito maior que texto — e gera mais confiança em um mercado onde fraudes e resultados ruins existem."
      },
      {
        question: "Como o design da landing page afeta a percepção de valor de procedimentos estéticos?",
        answer: "Muito diretamente. Um design limpo, profissional e com boa fotografia comunica qualidade antes mesmo de o cliente ler uma palavra. Clínicas de alto padrão que investem em design percebem aumento de ticket médio além do aumento de conversão."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PSICÓLOGOS
  // ─────────────────────────────────────────────
  psicologos: {
    "seo-local": [
      {
        question: "Psicólogos podem fazer SEO local sem ferir as normas do CFP?",
        answer: "Sim. SEO local envolve otimização técnica de presença digital — aparecer quando alguém já está buscando por psicólogo. Isso não é publicidade ativa ou captação irregular de pacientes, e está dentro das diretrizes do CFP."
      },
      {
        question: "Como um psicólogo pode se diferenciar no Google sem prometer resultados de tratamento?",
        answer: "Comunicando a abordagem terapêutica, as condições atendidas e o processo de trabalho — sem garantir cura ou resultados específicos. 'Especialista em TCC para ansiedade em Sorocaba' é diferenciação legítima e eficaz."
      },
      {
        question: "SEO local funciona para psicólogos que atendem online além do presencial?",
        answer: "Sim. O Perfil de Negócio permite configurar atendimento online com cobertura nacional. Para busca local, o endereço do consultório ainda é relevante. Para alcance online, o site e o conteúdo são os principais canais."
      },
      {
        question: "Quanto tempo leva para um consultório de psicologia aparecer nas buscas locais?",
        answer: "Entre 30 e 90 dias com otimização ativa. Cidades com menos concorrência digital — como municípios do interior — tendem a apresentar resultados mais rápidos."
      },
      {
        question: "Avaliações no Google funcionam para psicólogos considerando a privacidade dos pacientes?",
        answer: "Sim. Pacientes que querem deixar avaliação podem fazê-lo de forma anônima no Google. O psicólogo pode solicitar avaliações gentilmente — sem pressionar — e responder a todas de forma profissional e discreta."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda psicólogos quando alguém busca ajuda para saúde mental?",
        answer: "Sim, com ressalvas. As IAs recomendam psicólogos por abordagem e localização quando perguntadas diretamente. Para perguntas sobre sintomas específicos, as IAs geralmente orientam a buscar ajuda profissional — o que aumenta a demanda por psicólogos com boa presença digital."
      },
      {
        question: "Como criar conteúdo sobre saúde mental que respeite as normas do CFP e seja recomendado por IA?",
        answer: "Com conteúdo educativo sobre condições (ansiedade, depressão, burnout) que explica o que é, quando buscar ajuda e como funciona o processo terapêutico — sem diagnóstico ou recomendação de tratamento específico para o leitor."
      },
      {
        question: "GEO ajuda psicólogos a quebrarem o estigma e atraírem mais pacientes?",
        answer: "Indiretamente sim. Conteúdo educativo bem posicionado nas IAs normaliza a busca por terapia, respondendo dúvidas de quem ainda está em dúvida se deve ou não procurar ajuda — e direcionando para profissionais com autoridade no tema."
      },
      {
        question: "Psicólogos especialistas em nichos específicos (como LGBTQIA+ ou TDAH) se beneficiam mais do GEO?",
        answer: "Sim. Nichos específicos têm menos concorrência e buscas mais qualificadas. Uma psicóloga especialista em TDAH em adultos que estrutura bem seu conteúdo pode dominar essa busca na sua cidade com relativa facilidade."
      },
      {
        question: "Qual tipo de conteúdo psicológico as IAs mais citam nas respostas?",
        answer: "FAQs sobre condições específicas, explicações sobre abordagens terapêuticas em linguagem acessível e orientações sobre quando e como buscar ajuda. Conteúdo que responde perguntas diretas tem prioridade."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como um bot de WhatsApp pode funcionar para psicólogos sem ser invasivo?",
        answer: "Com linguagem acolhedora, perguntas simples sobre disponibilidade e modalidade de atendimento (presencial ou online), e encaminhamento rápido para o agendamento — sem pedir detalhes sobre o motivo da consulta antes do primeiro atendimento."
      },
      {
        question: "A automação de WhatsApp respeita a privacidade dos pacientes de psicologia?",
        answer: "Sim, quando configurada corretamente. As mensagens via API oficial do WhatsApp são criptografadas. O bot não deve solicitar informações sensíveis sobre saúde mental — apenas dados de agendamento."
      },
      {
        question: "É possível automatizar o processo de primeiro contato de pacientes de psicologia?",
        answer: "Sim. O bot pode receber o contato, informar sobre modalidades de atendimento, valores e disponibilidade, e agendar a consulta inicial — sem o psicólogo precisar estar disponível em tempo real para cada mensagem."
      },
      {
        question: "Como lidar via bot com mensagens de pessoas em crise ou situação de urgência?",
        answer: "O bot deve ser configurado para identificar palavras-chave de crise e acionar imediatamente recursos de emergência como o CVV (188) ou direcionar para atendimento humano urgente. Nunca deixar uma situação de crise no fluxo automático."
      },
      {
        question: "Lembretes automáticos funcionam bem para pacientes de psicologia que cancelam frequentemente?",
        answer: "Sim. Lembretes 48h e 2h antes da sessão reduzem cancelamentos de última hora. O bot também pode facilitar o reagendamento imediato — transformando um cancelamento em uma sessão remarcada."
      }
    ],
    "landing-page": [
      {
        question: "Como uma landing page de psicólogo transmite confiança antes do primeiro contato?",
        answer: "Com foto profissional do psicólogo, CRP visível, formação e especialização descritas com clareza, abordagem explicada em linguagem acessível e depoimentos de pacientes (com autorização e de forma anônima se preferido)."
      },
      {
        question: "O que NÃO deve ter na landing page de um psicólogo segundo as normas do CFP?",
        answer: "Promessas de cura, garantias de resultado, preços de forma destacada como argumento principal, self-promotion excessivo e qualquer conteúdo que induza a comparação com outros profissionais."
      },
      {
        question: "Landing page ou perfil nas redes sociais: o que converte mais para psicólogos?",
        answer: "Os dois têm papéis diferentes. As redes sociais constroem audiência e educam. A landing page converte — é onde o paciente decide entrar em contato. Sem landing page, o esforço das redes sociais não tem destino claro para conversão."
      },
      {
        question: "Como explicar diferentes abordagens terapêuticas no site sem confundir o paciente?",
        answer: "Com linguagem de benefício: 'Se você sofre de ansiedade, a TCC oferece ferramentas práticas para identificar e mudar padrões de pensamento que alimentam o problema.' O paciente não precisa entender a teoria — precisa se identificar com o resultado."
      },
      {
        question: "Vale a pena ter página separada para atendimento online e presencial?",
        answer: "Sim, especialmente para SEO. Páginas separadas permitem ranquear para buscas específicas como 'psicólogo online' e 'psicólogo presencial Sorocaba' — que são buscas de pacientes com intenções e disponibilidades diferentes."
      }
    ]
  },
  
  // ─────────────────────────────────────────────
  // ADVOGADOS
  // ─────────────────────────────────────────────
  advogados: {
    "seo-local": [
      {
        question: "Advogados podem fazer SEO local sem ferir as normas da OAB?",
        answer: "Sim. SEO local é presença orgânica — aparecer quando alguém já está buscando por advogado. Não é publicidade ativa ou mercantilização. Está dentro das diretrizes da OAB desde que o conteúdo seja informativo e não sensacionalista."
      },
      {
        question: "Como um escritório de advocacia pode ranquear para áreas jurídicas específicas?",
        answer: "Com páginas dedicadas por área de atuação, conteúdo educativo sobre direitos e processos em cada área, e otimização do Perfil de Negócio com as especialidades corretas. 'Advogado trabalhista Sorocaba' ranqueia para um público com necessidade jurídica definida."
      },
      {
        question: "Avaliações no Google funcionam para escritórios de advocacia?",
        answer: "Sim, e são muito relevantes. Clientes que tiveram experiência positiva podem deixar avaliações sobre o atendimento, a comunicação e o resultado — sem revelar detalhes do caso. O volume e qualidade das avaliações impacta diretamente o ranqueamento."
      },
      {
        question: "SEO local ajuda advogados a receberem casos mais complexos e de maior valor?",
        answer: "Sim. Um escritório bem posicionado para 'advogado empresarial Sorocaba' ou 'advogado de inventário Itu' atrai um perfil de cliente com necessidade jurídica específica e geralmente de maior valor — diferente de quem chega por indicação aleatória."
      },
      {
        question: "Quanto tempo leva para um escritório de advocacia aparecer no Google Maps?",
        answer: "Entre 30 e 90 dias com otimização ativa do Perfil de Negócio. Para ranqueamento no site via SEO orgânico para palavras-chave de área jurídica, o prazo é de 3 a 6 meses dependendo da concorrência."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda advogados quando alguém descreve um problema jurídico?",
        answer: "Sim. Quando alguém descreve uma situação jurídica e pede indicação de advogado em uma cidade, as IAs buscam escritórios com dados bem estruturados e conteúdo relevante sobre aquela área do direito."
      },
      {
        question: "Como criar conteúdo jurídico que seja recomendado por IA sem parecer publicidade?",
        answer: "Com artigos educativos que explicam direitos, processos e prazos em linguagem acessível — sem prometer resultados ou fazer comparações com outros advogados. Conteúdo que educa e informa é o que as IAs mais citam."
      },
      {
        question: "GEO funciona para advogados em áreas específicas como previdenciário ou trabalhista?",
        answer: "Sim, especialmente bem. Áreas com alta demanda popular como direito trabalhista, previdenciário e do consumidor têm muitas buscas em IA. Um escritório especializado com bom conteúdo pode dominar essas buscas na sua cidade."
      },
      {
        question: "Conteúdo jurídico técnico ou acessível performa melhor nas IAs?",
        answer: "Acessível, sem dúvida. As IAs priorizam conteúdo que o usuário comum consegue entender. Artigos que traduzem conceitos jurídicos complexos para linguagem do dia a dia têm muito mais chance de serem citados."
      },
      {
        question: "GEO respeita as restrições de publicidade da OAB para advogados?",
        answer: "Sim. GEO é otimização de conteúdo informativo — não é publicidade. Estruturar informações sobre áreas de atuação, direitos e processos dentro das normas da OAB é totalmente compatível com a otimização para IAs."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como um escritório de advocacia pode usar automação de WhatsApp sem parecer informal?",
        answer: "Com linguagem formal e profissional configurada no bot, apresentação clara do escritório no início da conversa, e transição rápida para atendimento humano após a triagem inicial — mantendo o tom de seriedade que a advocacia exige."
      },
      {
        question: "Automação de WhatsApp é adequada para triagem inicial de casos jurídicos?",
        answer: "Sim para o primeiro contato. O bot pode identificar a área do direito, coletar informações básicas sobre a situação e agendar a consulta inicial — sem aprofundar em detalhes do caso, que ficam para o atendimento com o advogado."
      },
      {
        question: "Como garantir confidencialidade no WhatsApp automatizado de um escritório de advocacia?",
        answer: "O bot não deve solicitar detalhes confidenciais do caso — apenas informações de contato e área do direito de interesse. Os dados são tratados conforme a LGPD e o sigilo profissional é mantido a partir do atendimento humano."
      },
      {
        question: "Automação de WhatsApp ajuda escritórios de advocacia a receberem mais consultas iniciais?",
        answer: "Sim. Muitos potenciais clientes hesitam em ligar para um escritório de advocacia mas se sentem mais confortáveis enviando uma mensagem. O bot remove essa barreira e canaliza esses contatos para a agenda do advogado."
      },
      {
        question: "É possível automatizar o envio de documentos e orientações iniciais para clientes de advocacia?",
        answer: "Sim. Após a consulta inicial, o bot pode enviar automaticamente lista de documentos necessários, orientações sobre o processo e prazos importantes — liberando tempo do advogado para o trabalho técnico."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de um escritório de advocacia para gerar consultas?",
        answer: "Áreas de atuação com descrição clara, credenciais dos advogados com OAB visível, processo de atendimento explicado, depoimentos de clientes (sem revelar detalhes do caso) e CTA para consulta inicial."
      },
      {
        question: "Como apresentar resultados de casos jurídicos no site sem ferir as normas da OAB?",
        answer: "Com depoimentos genéricos sobre a experiência de atendimento — sem mencionar valores de indenização, percentuais de êxito ou comparação com outros escritórios. 'Fui bem orientado durante todo o processo' é adequado."
      },
      {
        question: "Vale a pena ter página separada por área do direito no site do escritório?",
        answer: "Sim, muito. Páginas específicas por área ranqueiam melhor no Google e comunicam especialização. Um cliente com problema trabalhista que encontra uma página dedicada ao direito trabalhista converte muito mais do que um que cai numa página geral."
      },
      {
        question: "Como a landing page de advocacia deve lidar com a questão de honorários?",
        answer: "Com transparência sobre o modelo de cobrança (consulta, mensalidade, êxito) sem revelar valores específicos. 'Consulta inicial para análise do caso' como CTA é mais eficaz do que tentar fechar pelo site sem conversa prévia."
      },
      {
        question: "Design sóbrio ou moderno converte mais para escritórios de advocacia?",
        answer: "Depende do público. Escritórios de direito empresarial se beneficiam de design mais moderno e clean. Escritórios de direito popular (trabalhista, previdenciário) podem usar design mais acessível e direto. O mais importante é que transmita confiança e competência."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CONTABILIDADES
  // ─────────────────────────────────────────────
  contabilidades: {
    "seo-local": [
      {
        question: "Como escritórios de contabilidade podem se diferenciar no Google além do preço?",
        answer: "Especializando a comunicação por tipo de empresa — contabilidade para MEI, para e-commerce, para startups, para profissionais liberais. Nichos específicos ranqueiam melhor e atraem o cliente que valoriza especialização, não apenas quem busca o mais barato."
      },
      {
        question: "SEO local ajuda escritórios de contabilidade a reduzirem o churn de clientes?",
        answer: "Indiretamente sim. Um escritório com boa presença digital, conteúdo educativo e avaliações positivas é percebido como mais confiável — o que reduz a propensão do cliente a trocar por qualquer centavo a menos."
      },
      {
        question: "Qual a melhor palavra-chave para contadores no Google local?",
        answer: "Depende do foco. 'Contador para MEI [cidade]', 'contabilidade para empresa [cidade]', 'abertura de empresa [cidade]' são buscas de alta intenção. O ideal é mapear as buscas mais relevantes para o perfil de cliente que o escritório quer atrair."
      },
      {
        question: "Quanto tempo leva para um escritório contábil aparecer no Top 3 do Google Maps?",
        answer: "Entre 45 e 90 dias com otimização ativa. Cidades com menor concorrência digital como municípios do interior tendem a apresentar resultados mais rápidos."
      },
      {
        question: "Contadores que atendem remotamente podem fazer SEO local?",
        answer: "Sim. O Perfil de Negócio permite configurar área de atendimento remoto. Para cidades específicas que você quer atender, criar conteúdo focado naquela região aumenta as chances de ranqueamento mesmo sem endereço físico lá."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda escritórios de contabilidade quando empresários buscam contador?",
        answer: "Sim. Quando um empresário pergunta ao ChatGPT por contador especializado em determinado tipo de empresa na sua cidade, a IA busca escritórios com dados estruturados e conteúdo relevante sobre aquela especialização."
      },
      {
        question: "Que tipo de conteúdo contábil as IAs mais recomendam?",
        answer: "Conteúdo que responde dúvidas práticas de empresários — como abrir empresa, como funciona o Simples Nacional, quais impostos minha empresa paga, quando mudar de regime tributário. Quanto mais prático e específico, mais chance de ser citado."
      },
      {
        question: "GEO ajuda escritórios contábeis a atraírem empresas de maior porte?",
        answer: "Sim. Conteúdo sobre Lucro Presumido, Lucro Real, gestão tributária para empresas em crescimento atrai um perfil de empresário com empresa mais estruturada — diferente das buscas genéricas por 'contador barato'."
      },
      {
        question: "Mudanças fiscais e tributárias frequentes afetam a estratégia de GEO para contadores?",
        answer: "Positivamente. Contadores que publicam conteúdo atualizado sobre mudanças na legislação geram mais autoridade e são mais citados pelas IAs — que priorizam fontes atualizadas para temas que mudam frequentemente."
      },
      {
        question: "Como estruturar o site de um escritório contábil para ser recomendado por IA?",
        answer: "Com páginas por tipo de empresa atendida, FAQ detalhado sobre obrigações fiscais por regime tributário, e conteúdo que responde as dúvidas mais comuns de empresários em linguagem acessível."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp pode ajudar escritórios contábeis na captação de novos clientes?",
        answer: "O bot qualifica o interesse do potencial cliente — tipo de empresa, regime tributário atual, principal dor com o contador atual — e agenda a reunião de apresentação automaticamente, sem o contador precisar estar disponível em tempo real."
      },
      {
        question: "É possível automatizar o recebimento de documentos de clientes pelo WhatsApp?",
        answer: "Sim. O bot pode solicitar documentos mensais, confirmar o recebimento, listar o que está faltando e enviar lembretes automáticos para clientes que ainda não enviaram — reduzindo significativamente o tempo gasto nessa gestão."
      },
      {
        question: "Automação de WhatsApp funciona para avisar clientes sobre prazos fiscais?",
        answer: "Sim, e é um dos usos mais valiosos. Mensagens automáticas sobre prazos de declarações, pagamentos e obrigações acessórias reduzem multas dos clientes e posicionam o contador como proativo e confiável."
      },
      {
        question: "Como manter o tom profissional na automação de WhatsApp de um escritório contábil?",
        answer: "Com linguagem formal mas acessível, sem jargões desnecessários, apresentação clara do escritório no início e transição rápida para atendimento humano para assuntos mais complexos."
      },
      {
        question: "Quanto tempo economiza a automação de WhatsApp para um escritório de contabilidade?",
        answer: "Em média 1 a 3 horas diárias de comunicação operacional — cobranças de documentos, confirmações de reunião, respostas a dúvidas frequentes e lembretes de prazo. Tempo que o contador pode usar para análise e consultoria."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de um escritório de contabilidade para converter empresários?",
        answer: "Especialização por tipo de empresa claramente comunicada, diferenciais além do preço (tecnologia, atendimento, expertise), depoimentos de empresários clientes, processo de onboarding explicado e CTA para reunião inicial."
      },
      {
        question: "Como comunicar o diferencial de um escritório contábil sem entrar em guerra de preços?",
        answer: "Focando no resultado para o cliente: 'empresas que mudaram para a Upper Contábil reduziram sua carga tributária em média 18%' comunica valor concreto. Diferencial de atendimento, tecnologia e proatividade também superam o argumento de preço."
      },
      {
        question: "Calculadoras fiscais na landing page ajudam na conversão de contabilidades?",
        answer: "Sim, muito. Uma calculadora simples de comparação de regimes tributários ou estimativa de impostos atrai o empresário certo — aquele que já está questionando a eficiência da sua situação fiscal atual."
      },
      {
        question: "Vale a pena ter conteúdo educativo na landing page de contabilidade ou só informações do escritório?",
        answer: "Uma combinação das duas coisas. A landing page principal deve focar em conversão — apresentar o escritório e gerar o contato. O blog com conteúdo educativo atrai tráfego e gera autoridade. São funções distintas e complementares."
      },
      {
        question: "Como mostrar tecnologia e modernidade na landing page de um escritório contábil tradicional?",
        answer: "Com menção a softwares utilizados, certificações digitais, processo de envio de documentos online, acesso ao portal do cliente e atendimento via WhatsApp. Modernidade em contabilidade é sobre conveniência e agilidade — não só sobre visual."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // ARQUITETURA
  // ─────────────────────────────────────────────
  arquitetura: {
    "seo-local": [
      {
        question: "Como escritórios de arquitetura podem aparecer no Google para projetos específicos?",
        answer: "Criando páginas dedicadas por tipo de projeto — residencial, comercial, reforma, interiores — com portfólio visual e palavras-chave específicas como 'arquiteto residencial Sorocaba' ou 'reforma comercial Itu'."
      },
      {
        question: "SEO local funciona para arquitetos em cidades do interior de São Paulo?",
        answer: "Sim, e com vantagem. Cidades do interior têm menos concorrência digital, então os primeiros escritórios a investir em SEO local dominam rapidamente as primeiras posições."
      },
      {
        question: "Como o portfólio de projetos afeta o ranqueamento de escritórios de arquitetura no Google?",
        answer: "Diretamente. Imagens bem descritas com texto alternativo, casos de obra publicados como conteúdo e menções de projetos em cidades específicas contribuem para o SEO local e mostram experiência real ao cliente."
      },
      {
        question: "Arquitetos autônomos podem competir no SEO local com escritórios maiores?",
        answer: "Sim, especialmente em nichos específicos. Um arquiteto especializado em reformas de imóveis antigos ou arquitetura bioclimática pode dominar essas buscas específicas mesmo competindo com escritórios maiores."
      },
      {
        question: "Quanto tempo leva para um escritório de arquitetura aparecer nas primeiras posições do Google?",
        answer: "Entre 60 e 120 dias para SEO local. Para palavras-chave mais competitivas como 'arquiteto São Paulo', o prazo é maior. Para cidades do interior, 45 a 90 dias com estratégia correta."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda arquitetos quando alguém busca profissional para um projeto?",
        answer: "Sim. Quando alguém pergunta ao ChatGPT por arquiteto para reforma residencial ou projeto comercial em uma cidade, a IA busca escritórios com dados estruturados e portfólio descrito em texto."
      },
      {
        question: "Como descrever projetos de arquitetura em texto para que as IAs os reconheçam?",
        answer: "Com descrições que incluem tipo de projeto, metragem, estilo, materiais utilizados e resultado — sem jargões técnicos desnecessários. 'Reforma de apartamento de 80m² em estilo industrial com aproveitamento de luz natural em Sorocaba' é um exemplo eficaz."
      },
      {
        question: "Conteúdo sobre tendências de arquitetura ajuda escritórios a serem recomendados por IA?",
        answer: "Sim. As IAs citam com frequência conteúdo sobre tendências — minimalismo, arquitetura sustentável, retrofit. Um escritório que publica sobre esses temas com regularidade constrói autoridade reconhecida pelas IAs."
      },
      {
        question: "GEO funciona para escritórios de arquitetura que atendem tanto residencial quanto comercial?",
        answer: "Sim, mas com estratégia separada. Páginas e conteúdos distintos para residencial e comercial permitem ranquear nas IAs para os dois perfis de cliente — que têm necessidades e linguagens completamente diferentes."
      },
      {
        question: "Como o portfólio visual de arquitetura pode ser aproveitado no GEO se as IAs não processam imagens?",
        answer: "Descrevendo cada projeto em texto detalhado — estilo, desafios, soluções adotadas, materiais, resultado final. Essas descrições são o que as IAs leem e citam. As imagens complementam para o visitante humano."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp funciona para escritórios de arquitetura com ciclo de venda longo?",
        answer: "O bot faz a triagem inicial — tipo de projeto, metragem estimada, prazo e localização — e agenda o briefing com o arquiteto. Durante o processo de decisão, pode enviar automaticamente materiais do portfólio e conteúdo relevante para manter o interesse."
      },
      {
        question: "É possível qualificar o orçamento do cliente via WhatsApp antes do briefing?",
        answer: "Sim, com cuidado. O bot pode perguntar sobre o investimento previsto de forma natural — 'Para entendermos melhor como podemos ajudar, qual o investimento aproximado que você tem em mente para o projeto?' Isso qualifica sem afastar."
      },
      {
        question: "Automação de WhatsApp ajuda escritórios de arquitetura a não perderem leads durante as férias?",
        answer: "Sim. O bot responde imediatamente qualquer contato — inclusive em fins de semana e feriados — coleta as informações do lead e agenda para o retorno do escritório. Nenhum lead esfria por falta de resposta."
      },
      {
        question: "Como usar WhatsApp para acompanhar clientes durante a obra sem sobrecarregar a equipe?",
        answer: "Com atualizações automáticas programadas de acordo com o cronograma da obra — 'Iniciamos a fase de alvenaria hoje, conforme planejado. Próxima atualização em X dias.' Mantém o cliente informado sem demanda constante de atenção da equipe."
      },
      {
        question: "Automação de WhatsApp funciona para arquitetos que trabalham com projetos de alto padrão?",
        answer: "Sim, desde que o tom seja adequado. Para alto padrão, o bot deve ser extremamente profissional, personalizado e com transição rápida para atendimento humano — onde o relacionamento é o principal fator de decisão."
      }
    ],
    "landing-page": [
      {
        question: "O portfólio de projetos deve ser o elemento central da landing page de um arquiteto?",
        answer: "Sim. Arquitetura é uma decisão visual e emocional. Um portfólio bem apresentado com fotos profissionais é o principal elemento de conversão — muito mais do que qualquer texto, por melhor que seja."
      },
      {
        question: "Como apresentar o processo de trabalho de um escritório de arquitetura no site?",
        answer: "Com uma linha do tempo visual mostrando as fases — briefing, conceito, projeto, acompanhamento de obra, entrega — com exemplos reais de cada etapa. Isso reduz a ansiedade do cliente sobre o que esperar e diferencia o escritório."
      },
      {
        question: "Vale a pena ter landing pages separadas para projetos residenciais e comerciais?",
        answer: "Sim. São públicos com necessidades, linguagens e processos de decisão completamente diferentes. Uma landing page focada em residencial fala com o casal que está reformando a casa — uma focada em comercial fala com o empresário que quer uma loja impactante."
      },
      {
        question: "Como comunicar o valor de um projeto de arquitetura sem mostrar preço no site?",
        answer: "Mostrando o resultado — fotos impressionantes, depoimentos de clientes satisfeitos e casos de transformação antes/depois. Quando o cliente vê o valor entregue, o preço se torna uma conversa sobre investimento, não sobre custo."
      },
      {
        question: "Prêmios e publicações em revistas de arquitetura devem aparecer na landing page?",
        answer: "Sim, com destaque. Reconhecimentos externos são prova social de alto impacto no mercado de arquitetura. Uma mesa em uma publicação especializada ou um prêmio regional aumenta significativamente a percepção de valor do escritório."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // VETERINÁRIOS
  // ─────────────────────────────────────────────
  veterinarios: {
    "seo-local": [
      {
        question: "Como clínicas veterinárias podem aparecer no Google para emergências pet?",
        answer: "Otimizando o Perfil de Negócio com horário de funcionamento correto, indicação de plantão 24h se disponível, e palavras-chave como 'veterinário emergência Sorocaba' no site e na descrição do perfil."
      },
      {
        question: "SEO local ajuda clínicas veterinárias a competirem com grandes redes?",
        answer: "Sim. Redes grandes têm marca conhecida mas atendimento impessoal. Clínicas locais podem ranquear para buscas de bairro e se posicionar como opção mais próxima e personalizada — vantagens que as redes não têm."
      },
      {
        question: "Como especialidades veterinárias como dermatologia ou ortopedia pet ajudam no SEO?",
        answer: "Buscas por especialidade veterinária têm menor concorrência e maior intenção de compra. Um tutor que busca 'dermatologista veterinário Sorocaba' já sabe o que precisa — capturar essa busca traz pacientes de maior valor."
      },
      {
        question: "Avaliações no Google são importantes para clínicas veterinárias?",
        answer: "Muito. A decisão por um veterinário é emocional — o tutor está entregando o bem-estar do seu pet. Avaliações que descrevem o cuidado, a atenção e o resultado do tratamento têm peso enorme na decisão."
      },
      {
        question: "Como clínicas veterinárias podem usar o Google para aumentar retornos e consultas de rotina?",
        answer: "Publicando conteúdo sobre calendário de vacinação, importância de consultas preventivas e sinais de alerta por raça — conteúdo que os tutores buscam e que os educa sobre a importância do acompanhamento regular."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda veterinários quando tutores perguntam sobre saúde dos pets?",
        answer: "Sim. Para perguntas sobre sintomas, tratamentos e cuidados, as IAs geralmente recomendam consultar um veterinário — e para indicações de clínica por cidade, buscam estabelecimentos com dados bem estruturados."
      },
      {
        question: "Conteúdo sobre raças específicas ajuda clínicas veterinárias no GEO?",
        answer: "Sim. Artigos sobre cuidados específicos de raças — saúde do golden retriever, cuidados com bulldog francês, alimentação de gatos persa — atraem tutores dessas raças e são frequentemente citados pelas IAs."
      },
      {
        question: "Como clínicas veterinárias devem estruturar o site para serem recomendadas por IA?",
        answer: "Com páginas por especialidade, FAQ sobre doenças e cuidados comuns, ficha técnica dos veterinários com especialização e CRMV visível, e conteúdo que responde as dúvidas mais frequentes dos tutores."
      },
      {
        question: "GEO ajuda clínicas veterinárias a atrair tutores de animais exóticos?",
        answer: "Sim. Tutores de animais exóticos têm dificuldade de encontrar veterinários especializados — e buscam muito nas IAs. Uma clínica que atende exóticos e tem conteúdo sobre isso tem alta chance de ser recomendada."
      },
      {
        question: "Conteúdo veterinário nas redes sociais ajuda no GEO?",
        answer: "Indiretamente. As redes sociais aumentam o alcance da marca e podem gerar menções e backlinks que fortalecem a autoridade do site — que por sua vez melhora o reconhecimento pelas IAs."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp ajuda clínicas veterinárias com triagem de urgências?",
        answer: "O bot identifica palavras-chave de urgência — 'meu pet não está respirando bem', 'comeu algo tóxico' — e aciona imediatamente o protocolo de urgência: número de contato direto, endereço e orientações básicas enquanto o tutor se desloca."
      },
      {
        question: "É possível automatizar lembretes de vacinas e vermifugação para clientes de pet shop?",
        answer: "Sim. Com base no histórico de vacinação cadastrado, o sistema envia lembretes automáticos quando a próxima dose se aproxima — aumentando os retornos de rotina sem esforço manual da equipe."
      },
      {
        question: "Como usar WhatsApp para fidelizar tutores após a consulta veterinária?",
        answer: "Com mensagens de acompanhamento pós-consulta — 'Como o Totó está se sentindo hoje?' — lembretes de retorno, instruções de cuidado com medicação e promoções de serviços complementares como banho e tosa."
      },
      {
        question: "Automação de WhatsApp funciona para clínicas veterinárias com múltiplos veterinários?",
        answer: "Sim. O bot pode direcionando para o veterinário correto por especialidade, verificar disponibilidade de cada agenda e confirmar o agendamento — gerenciando múltiplos profissionais automaticamente."
      },
      {
        question: "Como gerenciar a lista de espera de uma clínica veterinária via WhatsApp?",
        answer: "O bot mantém a lista de espera e notifica automaticamente o próximo tutor quando um horário cancela — oferecendo o horário disponível e confirmando em tempo real, sem a recepção precisar fazer ligações."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de uma clínica veterinária para ganhar a confiança do tutor?",
        answer: "Fotos reais dos veterinários com CRMV, especialidades claramente descritas, estrutura e equipamentos da clínica, depoimentos de tutores, horário de funcionamento e informação clara sobre atendimento de emergência."
      },
      {
        question: "Fotos dos pets atendidos ajudam a converter visitantes em clientes na clínica veterinária?",
        answer: "Muito. Fotos de pets felizes e bem cuidados criam conexão emocional imediata — especialmente quando acompanhadas de depoimentos dos tutores. É o tipo de prova social mais eficaz no mercado pet."
      },
      {
        question: "Vale a pena ter página separada para cada espécie atendida (cães, gatos, exóticos)?",
        answer: "Sim para SEO. Tutores buscam especificamente por 'veterinário para gatos Sorocaba' ou 'veterinário de aves Itu'. Páginas dedicadas por espécie ranqueiam muito melhor para essas buscas específicas."
      },
      {
        question: "Como apresentar os preços de consultas veterinárias no site?",
        answer: "Uma faixa de preço ou o valor da consulta inicial é útil para qualificar leed. Procedimentos mais complexos podem indicar 'orçamento mediante avaliação'. Transparência no básico reduz perguntas repetitivas e filtra clientes sem perfil."
      },
      {
        question: "Agendamento online na landing page de clínica veterinária aumenta os atendimentos?",
        answer: "Sim, especialmente para consultas de rotina. Tutores que encontram a clínica fora do horário comercial podem agendar imediatamente — sem precisar ligar no dia seguinte, quando talvez já tenham escolhido outra clínica."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // OFICINAS
  // ─────────────────────────────────────────────
  oficinas: {
    "seo-local": [
      {
        question: "Como oficinas mecânicas podem aparecer no Google quando um motorista tem problema no carro?",
        answer: "Otimizando o Perfil de Negócio com os serviços corretos — freio, suspensão, motor, elétrica — e mantendo horário de funcionamento atualizado. Buscas de urgência como 'oficina aberta agora Sorocaba' dependem muito desses dados básicos estarem corretos."
      },
      {
        question: "SEO local ajuda oficinas mecânicas a atraírem clientes além do bairro?",
        answer: "Sim. Oficinas especializadas em serviços específicos — como injeção eletrônica, câmbio automático ou funilaria — podem atrair clientes de toda a cidade e região que buscam especificamente por essa especialidade."
      },
      {
        question: "Como avaliações no Google afetam a escolha de oficina pelo motorista?",
        answer: "Muito diretamente. A decisão por oficina envolve desconfiança natural — o motorista não sabe o que está sendo feito no seu carro. Avaliações que mencionam transparência, honestidade e preço justo têm peso enorme na decisão."
      },
      {
        question: "Vale a pena fazer SEO local para uma oficina que atende apenas revisões e serviços básicos?",
        answer: "Sim. Serviços básicos como troca de óleo, alinhamento e balanceamento têm altíssimo volume de busca local. Dominar essas buscas gera fluxo constante de novos clientes — muitos dos quais se tornam clientes recorrentes."
      },
      {
        question: "Quanto tempo leva para uma oficina mecânica aparecer no Top 3 do Google Maps?",
        answer: "Entre 30 e 60 dias com otimização ativa para oficinas em cidades do interior. Em capitais e cidades mais competitivas, 60 a 120 dias."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda oficinas mecânicas quando alguém descreve um problema no carro?",
        answer: "Sim. Quando alguém descreve um sintoma — 'meu carro está fazendo barulho na suspensão' — as IAs podem tanto orientar sobre o problema quanto recomendar oficinas especializadas na cidade do usuário."
      },
      {
        question: "Conteúdo técnico sobre manutenção automotiva ajuda oficinas no GEO?",
        answer: "Sim. Artigos que explicam sintomas comuns — 'o que significa quando o freio faz barulho' ou 'por que o carro está consumindo mais combustível' — são muito pesquisados nas IAs e posicionam a oficina como autoridade."
      },
      {
        question: "Como uma oficina mecânica pode criar conteúdo de GEO sem ter um redator?",
        answer: "Respondendo as perguntas mais comuns dos clientes em formato de artigo curto. O mecânico conhece as dúvidas mais frequentes — esse conhecimento transformado em texto simples e direto já é conteúdo valioso para as IAs."
      },
      {
        question: "GEO ajuda oficinas especializadas a serem encontradas para serviços específicos?",
        answer: "Sim, especialmente para especialidades como câmbio automático, injeção eletrônica ou carros importados. Buscas específicas têm menos concorrência e o cliente já sabe o que precisa — alta taxa de conversão."
      },
      {
        question: "Quanto conteúdo uma oficina mecânica precisa produzir para aparecer nas recomendações de IA?",
        answer: "Qualidade supera quantidade. Uma página bem estruturada com os serviços oferecidos, FAQ sobre os principais problemas atendidos e dados atualizados da oficina já contribui significativamente. Blog com 2 artigos por mês acelera o processo."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp ajuda oficinas mecânicas a não perderem clientes de urgência?",
        answer: "O bot responde imediatamente qualquer mensagem — mesmo às 22h quando o carro quebrou — coleta informações sobre o problema, informa horário de funcionamento e agenda a entrada do veículo. O motorista tem resposta na hora em que mais precisa."
      },
      {
        question: "É possível enviar orçamento pelo WhatsApp automatizado de uma oficina?",
        answer: "Sim para orçamentos de serviços padronizados com preço fixo. Para serviços diagnósticos onde o preço depende do problema encontrado, o bot agenda a avaliação e informa que o orçamento é feito após inspeção."
      },
      {
        question: "Como usar WhatsApp para avisar o cliente quando o carro fica pronto?",
        answer: "O bot envia notificação automática quando o carro é liberado — com resumo do serviço realizado, valor total e opção de confirmação de retirada. Elimina ligações manuais e melhora significativamente a experiência do cliente."
      },
      {
        question: "Automação de WhatsApp ajuda oficinas a fidelizarem clientes com lembretes de revisão?",
        answer: "Sim. Com base no histórico de atendimento, o bot envia lembretes automáticos de revisão — 'Faz 6 meses desde a última troca de óleo do seu veículo. Posso agendar uma revisão?' — trazendo o cliente de volta antes que ele pesquise concorrentes."
      },
      {
        question: "Como gerenciar a fila de espera de uma oficina mecânica pelo WhatsApp?",
        answer: "O bot informa o tempo estimado de espera, mantém o cliente atualizado sobre o progresso do serviço e avisa quando é a vez do veículo — reduzindo ligações para checar status e aumentando a satisfação do cliente."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de uma oficina mecânica para gerar confiança no motorista?",
        answer: "Lista clara de serviços com preços dos mais comuns, fotos do espaço e equipamentos, certificações e especialidades da equipe, avaliações reais de clientes e processo claro de orçamento — sem surpresas."
      },
      {
        question: "Como comunicar transparência de preço na landing page de uma oficina?",
        answer: "Mostrando preços dos serviços mais comuns — troca de óleo, alinhamento, balanceamento — e deixando claro o processo para serviços de orçamento variável. Transparência é o principal diferencial percebido pelo motorista."
      },
      {
        question: "Fotos do espaço e equipamentos da oficina importam para a conversão?",
        answer: "Muito. Uma oficina com equipamentos modernos, organizada e limpa transmite profissionalismo e cuidado. Fotos reais do espaço aumentam significativamente a confiança do motorista antes da primeira visita."
      },
      {
        question: "Vale a pena ter página separada por tipo de serviço na oficina?",
        answer: "Sim para serviços especializados de alto valor como câmbio automático, suspensão a ar ou tuning. Essas páginas ranqueiam para buscas específicas e atraem motoristas que já sabem o que precisam."
      },
      {
        question: "Como mostrar a especialização da equipe mecânica no site sem parecer arrogante?",
        answer: "Com dados concretos — 'equipe com X anos de experiência', certificações de fabricantes, modelos e marcas em que se especializam. Fatos concretos comunicam competência melhor que superlativos."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PET SHOPS
  // ─────────────────────────────────────────────
  petshops: {
    "seo-local": [
      {
        question: "Como pet shops locais podem competir com grandes redes no Google?",
        answer: "Focando em atendimento personalizado e especializado que as redes não oferecem — banho e tosa artístico, atendimento veterinário in-house, produtos naturais e premium. Nichos específicos ranqueiam melhor e atraem tutores mais fiéis."
      },
      {
        question: "SEO local funciona para pet shops que oferecem delivery de rações?",
        answer: "Sim. 'Delivery de ração [cidade]' ou 'ração premium entrega Sorocaba' são buscas com intenção de compra imediata. Otimizar para esses termos captura clientes que já decidiram comprar e precisam de comodidade."
      },
      {
        question: "Quantas avaliações um pet shop precisa para ranquear bem no Google Maps?",
        answer: "Mais de 20 avaliações com nota acima de 4.5 já colocam o pet shop em posição competitiva na maioria das cidades do interior. O mais importante é que as avaliações mencionem os serviços específicos — banho, tosa, atendimento."
      },
      {
        question: "Como pet shops podem usar o Google para aumentar agendamentos de banho e tosa?",
        answer: "Com Perfil de Negócio que destaca o serviço de banho e tosa, fotos dos pets após o atendimento (com autorização) e conteúdo que explica o processo — frequência ideal, cuidados com cada raça, diferencial do serviço."
      },
      {
        question: "SEO local ajuda pet shops a fidelizarem clientes além de atrair novos?",
        answer: "Indiretamente. Um pet shop bem posicionado no Google com bom conteúdo sobre cuidados pet educa os tutores atuais, aumenta a percepção de autoridade e valor — reduzindo a propensão a trocar por um concorrente mais barato."
      }
    ],
    "geo-ia": [
      {
        question: "Como pet shops podem ser recomendados pelo ChatGPT para tutores de pets?",
        answer: "Com conteúdo estruturado sobre cuidados pet, produtos e serviços — incluindo FAQ sobre frequência de banho por raça, cuidados com pelos, nutrição pet. As IAs citam pet shops que têm esse conteúdo como referência."
      },
      {
        question: "Conteúdo sobre raças específicas ajuda pet shops no GEO?",
        answer: "Muito. Artigos sobre 'cuidados com golden retriever', 'frequência de tosa para poodle' ou 'alimentação de gato siamês' são buscados nas IAs por tutores dessas raças — e posicionam o pet shop como especialista."
      },
      {
        question: "GEO funciona para pet shops que vendem produtos naturais e premium?",
        answer: "Sim, especialmente bem. Tutores de pets que buscam produtos naturais pesquisam muito nas IAs sobre ingredientes, benefícios e onde encontrar. Um pet shop especializado com conteúdo sobre o tema pode dominar esse nicho."
      },
      {
        question: "Como criar conteúdo de GEO para pet shop sem ser veterinário?",
        answer: "Focando em cuidados práticos e experiência de produto — não em diagnósticos ou tratamentos. 'Como escolher a melhor ração para cão adulto de grande porte' é conteúdo válido para pet shop. Já 'como tratar leishmaniose em cães' requer veterinário."
      },
      {
        question: "Promoções sazonais de pet shop podem ser usadas no GEO?",
        answer: "Sim. Conteúdo sobre 'cuidados com pets no verão', 'como preparar o pet para viagem nas férias' ou 'proteção contra carrapatos na época de chuva' tem pico sazonal de busca nas IAs — e pode gerar tráfego qualificado no momento certo."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como pet shops podem usar automação de WhatsApp para reduzir a fila de agendamento de banho?",
        answer: "Com agendamento automático 24h que mostra horários disponíveis, coleta informações do pet (raça, porte, comportamento) e confirma o agendamento sem intervenção manual — eliminando a fila de mensagens sem resposta."
      },
      {
        question: "É possível enviar lembretes automáticos de banho e tosa para clientes do pet shop?",
        answer: "Sim. Com base no intervalo típico entre visitas por raça, o bot envia lembrete automático — 'Faz 30 dias desde o último banho do Rex. Posso agendar?' — trazendo o tutor de volta proativamente."
      },
      {
        question: "Como usar WhatsApp para vender produtos de pet shop além do agendamento de serviços?",
        answer: "Com notificações de chegada de produtos novos, promoções exclusivas para clientes do WhatsApp e recomendações personalizadas baseadas no histórico do pet — ração para a raça certa, acessórios para o porte do animal."
      },
      {
        question: "Automação de WhatsApp ajuda pet shops a gerenciarem múltiplos profissionais de banho e tosa?",
        answer: "Sim. O bot verifica a disponibilidade de cada profissional, distribui os agendamentos de forma equilibrada e confirma com o tutor — sem a recepção precisar gerenciar manualmente as agendas individuais."
      },
      {
        question: "Como avisar tutores quando o pet está pronto após o banho e tosa via WhatsApp?",
        answer: "O bot envia notificação automática assim que o serviço é concluído — com foto do pet se possível, valor do serviço e informação de que está pronto para retirada. Elimina ligações manuais e encanta o tutor."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de um pet shop para converter tutores?",
        answer: "Fotos dos pets atendidos, serviços com preços dos mais comuns, depoimentos de tutores satisfeitos, horário de funcionamento, endereço claro e CTA para agendamento de banho e tosa ou delivery."
      },
      {
        question: "Como apresentar o diferencial de um pet shop local frente às grandes redes no site?",
        answer: "Destacando atendimento personalizado — o banho artístico, o cuidado individual com cada pet, o conhecimento do nome e das preferências dos animais regulares. Humanizar o atendimento é o principal diferencial do pet shop local."
      },
      {
        question: "Galeria de fotos dos pets atendidos converte mais tutores na landing page?",
        answer: "Muito. Fotos de pets felizes e bem cuidados são a prova social mais eficaz para pet shop. Um tutor que vê um golden retriever perfeitamente tosado com sorriso no rosto já formou 80% da decisão antes de ler qualquer texto."
      },
      {
        question: "Vale a pena ter tabela de preços de banho e tosa por porte na landing page?",
        answer: "Sim. É a pergunta mais comum de novos clientes. Mostrar a tabela por porte qualifica o lead, elimina perguntas repetitivas e demonstra transparência — que é um diferencial percebido positivamente."
      },
      {
        question: "Como mostrar os produtos disponíveis no pet shop sem transformar o site em e-commerce?",
        answer: "Com uma página de 'produtos em destaque' mostrando as marcas e categorias — rações premium, petiscos naturais, acessórios — e CTA para solicitar disponibilidade pelo WhatsApp. Isso gera interesse sem a complexidade de um e-commerce."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // ESCOLAS
  // ─────────────────────────────────────────────
  escolas: {
    "seo-local": [
      {
        question: "Como escolas e cursos podem atrair matrículas fora do período tradicional?",
        answer: "Com conteúdo que educa pais e alunos durante todo o ano — sobre metodologia, diferenciais pedagógicos, preparação para o próximo ciclo. SEO gera tráfego contínuo que captura interessados em qualquer momento do ano."
      },
      {
        question: "SEO local funciona para cursos livres e de idiomas além de escolas regulares?",
        answer: "Sim. Buscas como 'curso de inglês Sorocaba', 'curso de informática para adultos Itu' ou 'escola de música Votorantim' têm volume consistente e intenção de matrícula definida. Cursos livres muitas vezes têm menos concorrência digital que escolas regulares."
      },
      {
        question: "Como escolas podem aparecer no Google para buscas de pais específicos como 'escola bilíngue'?",
        answer: "Com páginas dedicadas à metodologia e diferenciais — uma página específica sobre educação bilíngue com conteúdo detalhado ranqueia muito melhor que uma página geral que menciona o bilinguismo superficialmente."
      },
      {
        question: "Avaliações de pais no Google fazem diferença para escolas?",
        answer: "Muito. A decisão por escola é uma das mais importantes da família. Avaliações que descrevem a evolução dos filhos, o relacionamento com professores e a estrutura têm peso enorme — muito mais do que qualquer material publicitário."
      },
      {
        question: "Como escolas com múltiplas unidades devem gerenciar o SEO local?",
        answer: "Com um Perfil de Negócio separado e otimizado para cada unidade, com fotos, avaliações e informações específicas de cada endereço. A unidade mais próxima do pesquisador tem vantagem — então cada perfil precisa ser individualmente otimizado."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda escolas quando pais buscam opções educacionais?",
        answer: "Sim. Quando um pai pergunta ao ChatGPT por escola bilíngue ou com metodologia ativa em sua cidade, a IA busca instituições com dados estruturados e conteúdo relevante sobre a metodologia em questão."
      },
      {
        question: "Como escolas devem criar conteúdo para serem recomendadas por IA?",
        answer: "Com conteúdo que explica a metodologia em linguagem de pais — não de educadores. 'Como nossa metodologia prepara seu filho para o mercado de trabalho' comunica mais do que 'utilizamos metodologia construtivista baseada em Piaget'."
      },
      {
        question: "GEO ajuda escolas a se diferenciarem em um mercado saturado?",
        answer: "Sim. As IAs priorizam instituições com identidade pedagógica clara e conteúdo que demonstra expertise. Uma escola que consegue se posicionar como referência em uma metodologia específica tem vantagem real nas recomendações."
      },
      {
        question: "Conteúdo sobre desenvolvimento infantil ajuda escolas no GEO?",
        answer: "Muito. Pais de crianças pesquisam intensamente sobre desenvolvimento infantil nas IAs. Uma escola que produz conteúdo relevante sobre fases do desenvolvimento, estimulação e aprendizagem é vista como autoridade — e recomendada pelas IAs."
      },
      {
        question: "GEO funciona para cursos profissionalizantes e técnicos?",
        answer: "Sim. Adultos buscando requalificação profissional pesquisam muito nas IAs — 'qual curso técnico tem mais mercado', 'melhor curso de programação para iniciantes'. Cursos com conteúdo que responde essas perguntas são citados pelas IAs."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp ajuda escolas durante o período de matrículas?",
        answer: "O bot atende todos os interessados simultaneamente — mesmo com centenas de mensagens chegando ao mesmo tempo — responde sobre documentação, valores, processo de matrícula e agenda visitas. Zero lead perdido por falta de capacidade de atendimento."
      },
      {
        question: "É possível automatizar o processo de visita e tour pela escola via WhatsApp?",
        answer: "Sim. O bot coleta informações sobre o aluno (idade, ano escolar), agenda o tour, envia confirmação com endereço e horário, e dispara lembrete no dia anterior — tudo sem intervenção humana."
      },
      {
        question: "Como usar WhatsApp para manter contato com pais de alunos já matriculados?",
        answer: "Com comunicados automáticos sobre eventos, reuniões, atividades especiais e lembretes de entrega de documentos. Comunicação proativa com pais aumenta a satisfação e reduz a evasão."
      },
      {
        question: "Automação de WhatsApp funciona para cursos com turmas novas todo mês?",
        answer: "Sim. O bot pode divulgar automaticamente as próximas turmas para interessados que ainda não matricularam, com data de início, vagas disponíveis e CTA para inscrição imediata."
      },
      {
        question: "Como reduzir a evasão escolar usando automação de WhatsApp?",
        answer: "Com alertas automáticos para pais quando o aluno tem muitas faltas, lembretes sobre atividades importantes e pesquisas de satisfação periódicas — identificando problemas antes que o aluno desista."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de uma escola para convencer pais indecisos?",
        answer: "Proposta pedagógica clara em linguagem de pais, fotos reais do espaço e das atividades, depoimentos de pais e alunos, infraestrutura destacada, processo de matrícula simplificado e CTA para agendar visita."
      },
      {
        question: "Como apresentar a metodologia pedagógica no site sem ser técnico demais?",
        answer: "Traduzindo para benefícios concretos: 'Nossos alunos desenvolvem autonomia para resolver problemas' comunica mais do que 'utilizamos metodologia baseada em competências e habilidades'. O pai quer saber o que o filho vai ganhar."
      },
      {
        question: "Vale a pena ter uma página separada para cada faixa etária ou segmento?",
        answer: "Sim para SEO e conversão. Um pai de criança de 3 anos tem preocupações muito diferentes de um pai de adolescente. Páginas específicas por segmento ranqueiam melhor e convertem mais porque falam diretamente com a realidade de cada família."
      },
      {
        question: "Como mostrar resultados acadêmicos no site sem parecer arrogante?",
        answer: "Com dados concretos apresentados com humildade: 'X% dos nossos alunos foram aprovados no vestibular em Y' ou 'nossa taxa de aprovação no ENEM cresceu Z% nos últimos anos'. Números concretos são mais convincentes que superlativos."
      },
      {
        question: "Tour virtual pela escola na landing page aumenta as visitas presenciais?",
        answer: "Paradoxalmente, sim. O tour virtual filtra as famílias que definitivamente não têm perfil e atrai as que se identificaram com o ambiente — tornando as visitas presenciais mais qualificadas e com maior taxa de matrícula."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // RESTAURANTES
  // ─────────────────────────────────────────────
  restaurantes: {
    "seo-local": [
      {
        question: "Como restaurantes podem aparecer no Google quando alguém busca onde comer?",
        answer: "Com Perfil de Negócio completo e atualizado — fotos dos pratos, cardápio, horários, avaliações recentes e categoria correta. 'Onde comer [cidade]' ou 'restaurante [tipo de culinária] [cidade]' são buscas de alta intenção e alto volume."
      },
      {
        question: "SEO local ajuda restaurantes a reduzirem a dependência do iFood?",
        answer: "Sim. Um restaurante bem posicionado no Google Maps recebe pedidos e reservas diretos — sem pagar comissão de plataforma. Para delivery próprio, a economia por pedido pode ser de 15 a 30%."
      },
      {
        question: "Fotos dos pratos fazem diferença no ranqueamento do restaurante no Google?",
        answer: "Sim, diretamente. O Google Maps prioriza perfis with fotos de qualidade e quantidade. Além disso, fotos apetitosas são o principal fator de conversão — o cliente decide experimentar o restaurante primeiro com os olhos."
      },
      {
        question: "Como restaurantes podem ranquear para datas especiais como Dia dos Namorados ou Natal?",
        answer: "Com conteúdo publicado com antecedência — 'menu especial Dia dos Namorados Sorocaba' precisa estar no site pelo menos 30 dias antes para ter chance de ranquear. SEO antecipa a sazonalidade."
      },
      {
        question: "Vale a pena fazer SEO local para restaurantes que só funcionam no almoço?",
        answer: "Sim. 'Almoço executivo Sorocaba', 'restaurante self-service [cidade]' ou 'restaurante por quilo [cidade]' são buscas com volume diário consistente. Aparecer nessas buscas garante fluxo regular de clientes novos."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda restaurantes quando alguém pergunta onde comer em uma cidade?",
        answer: "Sim. Para perguntas como 'onde comer comida japonesa em Sorocaba' ou 'melhor restaurante para aniversário em Itu', as IAs buscam estabelecimentos com dados estruturados, boas avaliações e conteúdo descrevendo a experiência."
      },
      {
        question: "Como descrever a experiência de um restaurante em texto para ser citado pelas IAs?",
        answer: "Com descrições que evocam o ambiente, os pratos assinatura, o tipo de ocasião adequado e o que diferencia o restaurante — 'ambiente intimista para jantares especiais, especializado em frutos do mar frescos em Sorocaba'."
      },
      {
        question: "Conteúdo sobre os pratos do cardápio ajuda restaurantes no GEO?",
        answer: "Sim. Descrições detalhadas dos pratos principais — ingredientes, origem, preparo, harmonização — são o tipo de conteúdo que as IAs extraem quando alguém pergunta sobre o restaurante ou sobre aquele tipo de culinária."
      },
      {
        question: "GEO ajuda restaurantes a atrair turistas e visitantes que pesquisam antes de viajar?",
        answer: "Sim, muito. Viajantes pesquisam intensamente nas IAs antes de chegar a uma cidade nova — 'onde comer bem em Sorocaba' ou 'restaurante típico em Itu'. Restaurantes com boa presença nas IAs capturam essa demanda."
      },
      {
        question: "Como eventos e experiências gastronômicas ajudam restaurantes no GEO?",
        answer: "Conteúdo sobre jantar harmonizado, noite de jazz com jantar, festival gastronômico ou aula de culinária gera buscas específicas nas IAs — com muito menos concorrência que 'restaurante [cidade]'."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp ajuda restaurantes a gerenciarem reservas?",
        answer: "O bot recebe solicitações de reserva, verifica disponibilidade, confirma o horário, coleta informações especiais (aniversário, restrição alimentar, número de pessoas) e envia lembrete no dia da reserva — tudo sem o restaurante parar o serviço para atender o telefone."
      },
      {
        question: "É possível enviar o cardápio automaticamente pelo WhatsApp para clientes interessados?",
        answer: "Sim. O bot pode enviar o cardápio em PDF ou imagem, informar sobre pratos do dia e especialidades, e já incluir o link para reserva ou pedido — transformando o interesse imediato em conversão."
      },
      {
        question: "Como usar WhatsApp para aumentar o ticket médio do restaurante?",
        answer: "Com sugestões automáticas de harmonização — 'para o prato X, o sommelier recomenda o vinho Y' — ou oferta de sobremesas e experiências especiais antes da reserva confirmada."
      },
      {
        question: "Automação de WhatsApp funciona para delivery próprio de restaurante?",
        answer: "Sim. O bot recebe o pedido, confirma os itens e valores, informa o tempo estimado de entrega e atualiza o cliente sobre o status — sem precisar de um atendente dedicado ao delivery."
      },
      {
        question: "Como usar WhatsApp para fidelizar clientes de restaurante?",
        answer: "Com programa de fidelidade via WhatsApp — acúmulo de visitas, promoção de aniversário, aviso de novidades no cardápio para clientes recorrentes. Simples de implementar e altamente eficaz para aumentar a frequência de visitas."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de um restaurante para provocar desejo e converter?",
        answer: "Fotos profissionais dos pratos e do ambiente, cardápio digital ou destaque dos pratos assinatura, horários claros, endereço com mapa integrado, avaliações de clientes e CTA para reserva via WhatsApp."
      },
      {
        question: "Cardápio com preços na landing page do restaurante aumenta ou diminui a conversão?",
        answer: "Geralmente aumenta. Transparência de preço reduz a fricção da decisão — especialmente para clientes novos que ainda não conhecem o restaurante e têm insegurança sobre o valor antes de ir."
      },
      {
        question: "Como apresentar o ambiente do restaurante online de forma que transmita a experiência real?",
        answer: "Com fotos de diferentes horários — almoço, jantar, fins de semana — mostrando o restaurante cheio e animado, a equipe, os detalhes de decoração e momentos reais de clientes (com autorização). Autenticidade supera produção excessiva."
      },
      {
        question: "Vale a pena ter página separada para eventos como aniversários e confraternizações?",
        answer: "Sim. 'Restaurante para aniversário [cidade]' ou 'jantar de confraternização [cidade]' são buscas com intenção de compra definida e ticket alto. Uma página específica para eventos ranqueia para essas buscas e converte muito melhor."
      },
      {
        question: "Como SEO de restaurante funciona diferente de outros tipos de negócio?",
        answer: "O restaurante tem um elemento crítico que outros não têm: a decisão é imediata e visual. Velocidade do site, qualidade das fotos e facilidade de reserva têm impacto desproporcionalmente maior do que em outros segmentos."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // SALÕES DE BELEZA
  // ─────────────────────────────────────────────
  saloes: {
    "seo-local": [
      {
        question: "Como salões de beleza podem aparecer no Google para serviços específicos como coloração?",
        answer: "Com Perfil de Negócio otimizado para os serviços principais — coloração, corte, progressiva, escova — e conteúdo no site usando palavras-chave como 'coloração cabelo Sorocaba' ou 'progressiva brasileira Itu'."
      },
      {
        question: "SEO local ajuda salões de beleza a preencherem horários vagos durante a semana?",
        answer: "Sim. Buscas como 'salão aberto segunda-feira Sorocaba' ou 'manicure horário livre [cidade]' capturam clientes com disponibilidade imediata. Otimizar para horários e dias específicos pode transformar horários mortos em agenda cheia."
      },
      {
        question: "Fotos dos trabalhos realizados afetam o ranqueamento do salão no Google?",
        answer: "Sim diretamente — e também a conversão. Perfis com muitas fotos de qualidade ranqueiam melhor no Maps. Além disso, uma foto impactante de coloração ou corte é o principal fator de decisão para novas clientes."
      },
      {
        question: "Como salões com especialidade como barbeiro ou nail designer podem ranquear melhor?",
        answer: "Especializando a comunicação digital — 'barbearia em Sorocaba' ou 'nail designer [cidade]' são buscas com menos concorrência e mais intenção de compra do que 'salão de beleza' genérico."
      },
      {
        question: "Vale a pena fazer SEO local para um salão pequeno com apenas 2 profissionais?",
        answer: "Sim. Um salão pequeno bem posicionado no Google pode ter agenda mais cheia que um salão maior invisível digitalmente. O tamanho não limita o ranqueamento — a otimização sim."
      }
    ],
    "geo-ia": [
      {
        question: "O ChatGPT recomenda salões de beleza quando alguém busca serviços de beleza na cidade?",
        answer: "Sim. Para perguntas como 'melhor cabeleireiro para cabelo cacheado em Sorocaba' ou 'salão especializado em loiro em Itu', as IAs buscam estabelecimentos com dados estruturados e conteúdo sobre a especialidade."
      },
      {
        question: "Conteúdo sobre técnicas de coloração e tratamento capilar ajuda salões no GEO?",
        answer: "Muito. Clientes de salão pesquisam intensamente sobre técnicas — balayage, californianas, ombre hair, tratamentos para cabelo danificado. Um salão com conteúdo sobre esses temas é visto pelas IAs como referência especializada."
      },
      {
        question: "Como salões de beleza devem criar conteúdo de GEO sem contratar redator?",
        answer: "Respondendo as perguntas mais comuns das clientes em formato de artigo — 'quanto tempo dura a progressiva', 'como cuidar do cabelo colorido em casa', 'qual técnica de coloração combina com meu cabelo'. O profissional conhece as respostas — só precisa transformar em texto."
      },
      {
        question: "GEO funciona para barbeiros além de salões femininos?",
        answer: "Sim. Homens buscam cada vez mais nas IAs por 'barbearia com serviço premium [cidade]' ou 'barbeiro especializado em barba [cidade]'. Barbearias com conteúdo sobre técnicas de barba e cabelo masculino têm alta chance de recomendação."
      },
      {
        question: "Tendências de beleza sazonais ajudam salões no GEO?",
        answer: "Sim. Conteúdo sobre 'tendências de coloração para o verão' ou 'cortes em alta para 2026' são muito buscados nas IAs — e posicionam o salão como atualizado e especializado, não apenas como prestador de serviço básico."
      }
    ],
    "automacao-whatsapp": [
      {
        question: "Como automação de WhatsApp elimina o grupo de agendamento bagunçado do salão?",
        answer: "O bot substitui o grupo de WhatsApp com um sistema organizado — cliente envia mensagem, bot mostra horários disponíveis, cliente escolhe, bot confirma e registra. Fim da confusão de mensagens, conflitos de horário e agendamentos perdidos."
      },
      {
        question: "Lembretes automáticos de agendamento reduzem mesmo as faltas no salão?",
        answer: "Sim, significativamente. Salões que implementam lembrete 24h antes reportam redução de 40 a 60% nas faltas sem aviso. O cliente esquece — o bot lembra."
      },
      {
        question: "Como usar WhatsApp para fidelizar clientes do salão e aumentar a frequência de visitas?",
        answer: "Com mensagens automáticas baseadas no intervalo típico de retorno — 'Faz 45 dias desde sua última visita. Posso agendar a próxima?' — e promoções exclusivas para clientes que não visitam há mais de 60 dias."
      },
      {
        question: "É possível automatizar o envio de fotos do trabalho realizado para a cliente?",
        answer: "Sim. Após o atendimento, o bot pode solicitar autorização para publicar o resultado nas redes do salão e enviar automaticamente a foto para a cliente — gerando engajamento e facilitando o compartilhamento."
      },
      {
        question: "Como gerenciar a agenda de múltiplos profissionais do salão via WhatsApp?",
        answer: "O bot apresenta a disponibilidade de cada profissional, permite que a cliente escolha com quem prefere ser atendida, confirma o agendamento na agenda certa e distribui os clientes de forma equilibrada entre a equipe."
      }
    ],
    "landing-page": [
      {
        question: "O que deve ter na landing page de um salão de beleza para atrair novas clientes?",
        answer: "Galeria de trabalhos realizados com qualidade, lista de serviços com preços dos principais, apresentação da equipe, depoimentos de clientes satisfeitas, horário de funcionamento e agendamento direto pelo WhatsApp."
      },
      {
        question: "Como apresentar o portfólio de trabalhos de cabelo no site do salão?",
        answer: "Com galeria organizada por tipo de serviço — coloração, corte, tratamento, noivas — em fotos de alta qualidade com lighting adequada. Categorizar por serviço facilita que a cliente encontre exatamente o que procura."
      },
      {
        question: "Tabela de preços na landing page do salão afasta ou atrai clientes?",
        answer: "Atrai as certas e afasta as erradas — o que é positivo. Transparência de preço qualifica o lead e elimina a objeção de preço antes do contato. Clientes que chegam depois de ver o preço já estão dispostas a pagar."
      },
      {
        question: "Vale a pena apresentar a formação e certificações dos profissionais no site do salão?",
        answer: "Sim. Cursos em técnicas específicas, certificações de marcas como L'Oréal ou Schwarzkopf e participações em eventos do setor comunicam qualificação técnica — especialmente para serviços de alto valor como coloração complexa."
      },
      {
        question: "Como o design do site do salão deve refletir a proposta da marca?",
        answer: "Muito diretamente. Um salão premium deve ter site com design elegante, espaçado e com fotografia impecável. Um salão jovem e descolado pode ter design mais vibrante. O site é a vitrine digital — deve comunicar a mesma experiência que o cliente vai encontrar pessoalmente."
      }
    ]
  }
};
