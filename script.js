     document.addEventListener('alpine:init', () => {
            Alpine.data('siteData', () => ({
                darkMode: true,
                lang: 'en',
                t: {
                    en: {
                        navCta: "Connect Bot",
                        crisisStatus: "80% Critical Threshold Reached",
                        heroTitle: "Stop <span class='text-brand-crisis'>Failing</span>. Start Modeling Your Success.",
                        heroSub: "MardRisk AI tracks your cognitive load and emotional state. When you are too close to the edge, we intervene strategically.",
                        intTitle: "MARD INTERVENTION #0842",
                        active: "Active",
                        userMsg: "I'm totally overwhelmed. I can't think straight anymore.",
                        aiRiskHeader: "RISK: 80% (CRITICAL)",
                        aiResponse: "ACTION REQUIRED: You have exceeded the 80% stress threshold. System has engaged 'Mandatory Recovery Mode'. I have paused your pending tasks. Breathe for 5 minutes.",
                        riskLabel: "System Overload",
                        matrixTitle: "Strategic Risk Matrix",
                        footerDesc: "Built for high-performers who refuse to burn out.",
                        levels: [
                            { id: "L1", title: "SAFE (0-35%)", border: "border-brand-safe", text: "text-brand-safe", iconBg: "bg-brand-safe/10", desc: "Routine monitoring and goal optimization. The AI acts as your Executive Assistant." },
                            { id: "L2", title: "TENSION (35-75%)", border: "border-brand-warning", text: "text-brand-warning", iconBg: "bg-brand-warning/10", desc: "Active intervention. Stress detected. AI suggests breaks and re-prioritizes your day." },
                            { id: "L3", title: "CRISIS (75-100%)", border: "border-brand-crisis", text: "text-brand-crisis", iconBg: "bg-brand-crisis/10", desc: "Emergency Mode. Critical burnout risk. Mandatory recovery plan activated immediately." }
                        ]
                    },
                    hy: {
                        navCta: "Միանալ Բոտին",
                        crisisStatus: "80% Ճգնաժամային Շեմը Հատված է",
                        heroTitle: "Դադարեք <span class='text-brand-crisis'>Ձախողել</span>: Սկսեք կառավարել ձեր կյանքը:",
                        heroSub: "MardRisk AI-ն հետևում է ձեր էմոցիոնալ վիճակին: Երբ դուք չափազանց մոտ եք սահմանին, մենք միջամտում ենք ստրատեգիապես:",
                        intTitle: "MARD ՄԻՋԱՄՏՈՒԹՅՈՒՆ #0842",
                        active: "Ակտիվ",
                        userMsg: "Ես լիովին հոգնել եմ: Այլևս չեմ կարողանում սթափ մտածել:",
                        aiRiskHeader: "ՌԻՍԿ: 80% (ՃԳՆԱԺԱՄ)",
                        aiResponse: "ԱՆՄԻՋԱՊԵՍ ՄԻՋԱՄՏՈՒԹՅՈՒՆ: Դուք հատել եք 80% սթրեսի շեմը: Համակարգը միացրել է 'Պարտադիր վերականգնման ռեժիմը': Ձեր գործերը հետաձգված են: Հանգստացեք 5 րոպե:",
                        riskLabel: "Համակարգի Ծանրաբեռնվածություն",
                        matrixTitle: "Ստրատեգիական Ռիսկերի Մատրիցա",
                        footerDesc: "Ստեղծված է նրանց համար, ովքեր ձգտում են առավելագույնին՝ առանց հոգնածության:",
                        levels: [
                            { id: "L1", title: "ԿԱՅՈՒՆ (0-35%)", border: "border-brand-safe", text: "text-brand-safe", iconBg: "bg-brand-safe/10", desc: "Ընթացիկ մոնիտորինգ և նպատակների օպտիմալացում: AI-ն աշխատում է որպես ձեր օգնական:" },
                            { id: "L2", title: "ԼԱՐՎԱԾ (35-75%)", border: "border-brand-warning", text: "text-brand-warning", iconBg: "bg-brand-warning/10", desc: "Ակտիվ միջամտություն: AI-ն առաջարկում է դադարներ և վերադասավորում ձեր օրը:" },
                            { id: "L3", title: "ՃԳՆԱԺԱՄ (75-100%)", border: "border-brand-crisis", text: "text-brand-crisis", iconBg: "bg-brand-crisis/10", desc: "Էքստրեմալ ռեժիմ: Այրման կրիտիկական ռիսկ: Վերականգնման պլանը միանում է անմիջապես:" }
                        ]
                    },
                    ru: {
                        navCta: "Запустить Бота",
                        crisisStatus: "Достигнут критический порог 80%",
                        heroTitle: "Перестаньте <span class='text-brand-crisis'>Проигрывать</span>. Моделируйте успех.",
                        heroSub: "MardRisk AI отслеживает вашу когнитивную нагрузку. Когда вы слишком близки к пределу, мы вмешиваемся стратегически.",
                        intTitle: "MARD ВМЕШАТЕЛЬСТВО #0842",
                        active: "Активно",
                        userMsg: "Я полностью перегружен. Я больше не могу нормально соображать.",
                        aiRiskHeader: "РИСК: 80% (КРИТИЧЕСКИЙ)",
                        aiResponse: "СРОЧНОЕ ДЕЙСТВИЕ: Вы превысили порог стресса в 80%. Система переведена в 'Режим обязательного восстановления'. Задачи приостановлены. Отдохните 5 минут.",
                        riskLabel: "Перегрузка Системы",
                        matrixTitle: "Матрица Стратегических Рисков",
                        footerDesc: "Создано для тех, кто стремится к вершинам, избегая выгорания.",
                        levels: [
                            { id: "L1", title: "СТАБИЛЬНО (0-35%)", border: "border-brand-safe", text: "text-brand-safe", iconBg: "bg-brand-safe/10", desc: "Рутинный мониторинг и оптимизация целей. AI работает как ваш личный ассистент." },
                            { id: "L2", title: "НАПРЯЖЕНИЕ (35-75%)", border: "border-brand-warning", text: "text-brand-warning", iconBg: "bg-brand-warning/10", desc: "Активное вмешательство. AI предлагает перерывы и переставляет приоритеты задач." },
                            { id: "L3", title: "КРИЗИС (75-100%)", border: "border-brand-crisis", text: "text-brand-crisis", iconBg: "bg-brand-crisis/10", desc: "Экстренный режим. Критический риск выгорания. План восстановления включается немедленно." }
                        ]
                    }
                }
            }))
        })