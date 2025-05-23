import { MessageSchema } from '.'

export const ru: MessageSchema = {
  home_title: 'Artalk | Самостоятельная система комментариев на базе Golang',
  get_artalk: 'Получить Artalk',
  get_artalk_link: 'https://artalk.js.org/guide/intro.html',
  slogan_line_1: 'Cамохостинг',
  slogan_line_2: 'Комментарий',
  slogan_line_3: 'Система',
  nav_docs_link: 'https://artalk.js.org/guide/intro.html',
  nav_changelog_link: 'https://github.com/ArtalkJS/Artalk/blob/master/CHANGELOG.md',
  github_link: 'https://github.com/ArtalkJS/Artalk',
  docs: 'Документация',
  changelog: 'Журнал изменений',
  feature_slight_title: 'Лёгкость',
  feature_slight_desc_line_1: 'Нативное JS-приложение, ядро без зависимостей,',
  feature_slight_desc_line_2: 'небольшой размер, быстрая загрузка, моментальный отклик.',
  feature_swift_title: 'Быстрота',
  feature_swift_desc_line_1:
    'Artalk написан на Golang, что обеспечивает высокую скорость, кроссплатформенность и лёгкость развертывания.',
  feature_swift_desc_line_2:
    'Мы также предоставляем Docker-образ, что делает развертывание ещё проще.',
  feature_swift_self_compile: 'Планируете компилировать самостоятельно?',
  deploy_bin: 'Бинарный файл',
  deploy_bin_sub: 'Файловое развертывание',
  deploy_bin_link: 'https://artalk.js.org/guide/deploy.html#бинарные-файлы',
  deploy_docker: 'Docker',
  deploy_docker_sub: 'Развертывание через Docker',
  deploy_docker_link: 'https://artalk.js.org/guide/deploy.html#docker',
  docker_hub_link: 'https://hub.docker.com/r/artalk/artalk-go',
  self_compile_guide_link: 'https://artalk.js.org/develop/contributing.html',
  learn_more: 'Узнать больше',
  copy: 'Копировать',
  copied: 'Скопировано!',
  feature_full_title: 'Полнота',
  feature_full_desc_line_1:
    'Artalk предоставляет множество встроенных функций, мы стараемся сохранить баланс между простотой и функциональностью, обеспечивая готовность к использованию сразу после установки.',
  feature_func_title: 'Интеграция',
  feature_func_desc_line_1:
    'Artalk поддерживает богатые возможности интеграции с другими сервисами.',
  feature_safe_title: 'Безопасность',
  feature_safe_desc_line_1:
    'Artalk — это программное обеспечение с открытым исходным кодом, самоуправляемое и прозрачное.',
  feature_safe_desc_line_2:
    'Artalk имеет встроенные инструменты миграции, что облегчает перенос комментариев.',
  feature_safe_desc_line_3: 'Безопасность всегда на первом месте, мы регулярно обновляем систему.',
  feature_safe_report_audit_hint: 'Нашли проблему безопасности?',
  feature_safe_report_audit_btn: 'Сообщить сейчас',
  feature_safe_report_audit_link: 'https://github.com/ArtalkJS/Artalk/issues',
  func_social_login: 'Социальная авторизация',
  func_email: 'Отправка писем',
  func_captcha: 'Капча',
  func_message_pusher: 'Уведомление о сообщениях',
  func_moderator: 'Модерация контента',
  func_emoji: 'Смайлы',
  func_img_upload: 'Загрузка изображений',
  func_rich_text: 'Форматированный текст',
  func_code_highlight: 'Подсветка кода',
  func_avatar: 'Аватар пользователя',
  func_img_lightbox: 'Просмотр изображений',
  func_database: 'База данных',
  func_cache: 'Кэширование',
  func_deploy: 'Развертывание программы',
  func_os: 'Операционная система',
  func_platform: 'Архитектура платформы',
  func_transfer_import: 'Импорт комментариев',
  func_email_aliyun: 'Email от Alibaba Cloud',
  func_captcha_geetest: 'Geetest',
  func_message_pusher_lark: 'Lark',
  func_message_pusher_dingtalk: 'DingTalk',
  func_moderator_aliyun: 'Alibaba Cloud',
  func_moderator_tencent: 'Tencent Cloud',
  func_moderator_offline: 'Оффлайн словарь',
  func_emoji_standard_format: 'Стандартный формат',
  func_emoji_owo_format: 'Формат OwO',
  func_img_upload_local: 'Сохранение локально',
  func_img_upload_function: 'Пользовательская функция',
  func_avatar_function: 'Пользовательская функция',
  func_cache_internal: 'Встроенный кэш',
  func_deploy_bin: 'Бинарные файлы',
  func_deploy_docker: 'Docker-образ',
  feature_sidebar_name: 'Боковая панель',
  feature_sidebar_desc: 'Быстрое управление, интуитивный просмотр',
  feature_social_login_name: 'Социальная авторизация',
  feature_social_login_desc: 'Быстрая авторизация через соцсети',
  feature_email_notification_name: 'Уведомления по email',
  feature_email_notification_desc: 'Множество способов отправки, шаблоны писем',
  feature_diverse_push_name: 'Разнообразные уведомления',
  feature_diverse_push_desc: 'Множество способов уведомления, шаблоны',
  feature_site_notification_name: 'Уведомления на сайте',
  feature_site_notification_desc: 'Красные точки, список упоминаний',
  feature_captcha_name: 'Капча',
  feature_captcha_desc: 'Множество типов проверки, ограничение частоты',
  feature_comment_moderation_name: 'Модерация комментариев',
  feature_comment_moderation_desc: 'Проверка контента, блокировка спама',
  feature_image_upload_name: 'Загрузка изображений',
  feature_image_upload_desc: 'Пользовательская загрузка, поддержка хостинга изображений',
  feature_markdown_name: 'Markdown',
  feature_markdown_desc: 'Поддержка синтаксиса Markdown',
  feature_emoji_pack_name: 'Пакет смайлов',
  feature_emoji_pack_desc: 'Поддержка формата OwO, быстрая интеграция',
  feature_multi_site_name: 'Мульти-сайт',
  feature_multi_site_desc: 'Изоляция сайтов, централизованное управление',
  feature_admin_name: 'Администратор',
  feature_admin_desc: 'Парольная защита, значки',
  feature_page_management_name: 'Управление страницами',
  feature_page_management_desc: 'Быстрый просмотр, переход по заголовкам',
  feature_page_view_statistics_name: 'Статистика просмотров',
  feature_page_view_statistics_desc: 'Лёгкий подсчёт просмотров страниц',
  feature_hierarchical_structure_name: 'Иерархическая структура',
  feature_hierarchical_structure_desc: 'Вложенные списки, прокрутка для загрузки',
  feature_comment_voting_name: 'Голосование за комментарии',
  feature_comment_voting_desc: 'Поддержка/против комментариев',
  feature_comment_sorting_name: 'Сортировка комментариев',
  feature_comment_sorting_desc: 'Множество способов сортировки, свободный выбор',
  feature_comment_search_name: 'Поиск комментариев',
  feature_comment_search_desc: 'Быстрый поиск по комментариям',
  feature_comment_pinning_name: 'Закрепление комментариев',
  feature_comment_pinning_desc: 'Закрепление важных сообщений',
  feature_view_author_only_name: 'Только комментарии автора',
  feature_view_author_only_desc: 'Отображение только комментариев автора',
  feature_comment_jump_name: 'Переход к комментариям',
  feature_comment_jump_desc: 'Быстрый переход к цитируемым комментариям',
  feature_auto_save_name: 'Автосохранение',
  feature_auto_save_desc: 'Защита от потери введённого контента',
  feature_ip_region_name: 'Регион по IP',
  feature_ip_region_desc: 'Отображение региона пользователя по IP',
  feature_data_migration_name: 'Миграция данных',
  feature_data_migration_desc: 'Свободная миграция, быстрая резервная копия',
  feature_image_lightbox_name: 'Просмотр изображений',
  feature_image_lightbox_desc: 'Быстрая интеграция просмотра изображений',
  feature_image_lazy_load_name: 'Ленивая загрузка изображений',
  feature_image_lazy_load_desc: 'Отложенная загрузка изображений, оптимизация опыта',
  feature_latex_name: 'LaTeX',
  feature_latex_desc: 'Интеграция LaTeX для формул',
  feature_night_mode_name: 'Ночной режим',
  feature_night_mode_desc: 'Переключение на ночной режим',
  feature_extension_plugin_name: 'Расширяемые плагины',
  feature_extension_plugin_desc: 'Создавайте больше возможностей',
  feature_multi_language_name: 'Мультиязычность',
  feature_multi_language_desc: 'Поддержка множества языков',
  feature_command_line_name: 'Командная строка',
  feature_command_line_desc: 'Управление через командную строку',
  feature_api_documentation_name: 'API документация',
  feature_api_documentation_desc: 'Документация в формате OpenAPI',
  feature_program_upgrade_name: 'Обновление программы',
  feature_program_upgrade_desc: 'Проверка версий, одно нажатие для обновления',
  intro_stack_card_1_name: 'Алиса',
  intro_stack_card_1_text: 'Привет, как дела?',
  intro_stack_card_2_name: 'Боб',
  intro_stack_card_2_text: 'Как у тебя дела в последнее время?',
  intro_stack_card_3_name: 'Кук',
  intro_stack_card_3_text: 'Доброе утро',
  concept_section_locales_title: 'Многоязычная локализация',
  concept_section_locales_desc:
    'Поддержка нескольких языков, таких как английский, китайский, французский, японский, корейский, русский и другие.',
  concept_section_docker_title: 'Установка с помощью Docker',
  concept_section_docker_desc_line_1:
    'Мы предоставляем образ Docker, который позволяет выполнить быструю установку одним кликом.',
  concept_section_docker_desc_line_2:
    'Построен с использованием Golang, поддерживает кроссплатформенное развертывание. Легко запустите его в любом месте.',
  concept_section_open_source_title: 'Открытый исходный код',
  concept_section_open_source_desc_line_1:
    'Artalk – это свободное и открытое программное обеспечение, ориентированное на конфиденциальность и безопасность данных.',
  concept_section_open_source_desc_line_2:
    'Мы поддерживаем его уже {{year}} лет, регулярно обновляем и совершенствуем с целью улучшения пользовательского опыта и повышения стабильности.',
  feature_community_title: 'Расширьте свои возможности',
  feature_community_desc:
    'В маркетплейсе плагинов вы можете найти множество плагинов, чтобы настроить Artalk под свои нужды.',
  use_artalk_with: 'Интеграция Artalk в',
  any_website_or_blog: 'любой веб-сайт или блог',
  see_more_on_github: 'Подробнее на GitHub',
  star_proposal_line_1: 'Если вам нравится Artalk, пожалуйста, поставьте звезду 🌟',
  star_proposal_line_2: 'Это поможет нам стать лучше.',
}
