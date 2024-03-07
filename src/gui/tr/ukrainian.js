var TR = {
  // background
  backgroundTitle: 'Фон',
  backgroundReset: 'Скинути',
  backgroundImport: 'Імпортувати (jpg, png...)',
  backgroundFill: 'Заповнення',

  // camera
  cameraTitle: 'Камера',
  cameraReset: 'Вигляд',
  cameraCenter: 'Скинути (bar)',
  cameraFront: 'Зпереду (F)',
  cameraLeft: 'Зліва (L)',
  cameraTop: 'Згори (T)',
  cameraMode: 'Режим камери',
  cameraOrbit: 'Орбіта (Обертання)',
  cameraSpherical: 'Сферична (трекбол)',
  cameraPlane: 'Площина (трекбол)',
  cameraProjection: 'Проекція',
  cameraPerspective: 'Перспективна',
  cameraOrthographic: 'Ортогональна',
  cameraFov: 'Кут огляду',
  cameraPivot: 'Вибір обертання',

  // file
  fileTitle: 'Файл',
  fileImportTitle: 'Імпорт',
  fileAdd: 'Додати(obj,sgl,ply,stl)',
  fileAutoMatrix: 'Маштаб-вигляд',
  fileVertexSRGB: 'Кольори вершин sRGB',
  fileExportSceneTitle: 'Експорт сцени',
  fileExportAll: 'Экспорувати все',
  fileExportSGL: 'Зберігти .sgl',
  fileExportOBJ: 'Зберігти .obj',
  fileExportPLY: 'Зберігти .ply',
  fileExportSTL: 'Зберігти .stl',

  fileExportTextureTitle: null,
  fileExportTextureSize: null,
  fileExportColor: null,
  fileExportRoughness: null,
  fileExportMetalness: null,

  // scene
  sceneTitle: 'Сцена',
  sceneReset: 'Очистити сцену',
  sceneResetConfirm: 'Підтвердити чітку сцену',
  sceneAddSphere: 'Додати сферу',
  sceneAddCube: 'Додати куб',
  sceneAddCylinder: 'Додати циліндр',
  sceneAddTorus: 'Додати тор',
  sceneSelection: 'Обрати',
  sceneMerge: "З'єднати",
  sceneDuplicate: null,
  sceneDelete: 'Видалити обране',

  // mesh
  meshTitle: 'Сітка',
  meshNbVertices: 'Вершини : ',
  meshNbFaces: 'Грані : ',

  // topology
  topologyTitle: 'Топологія',

  //multires
  multiresTitle: 'Деталізація',
  multiresSubdivide: 'Збільшити',
  multiresReverse: 'Інвертувати',
  multiresResolution: 'Роздільна здатність',
  multiresNoLower: 'Нище рівня не існує.',
  multiresNoHigher: 'Вище рівня не існує.',
  multiresDelHigher: 'Видалити високе',
  multiresDelLower: 'Видалити низьке',
  multiresSelectLowest: 'Оберіть низький перед інвертуванняи.',
  multiresSelectHighest: 'Оберіть високий перед збільшенням.',
  multiresWarnBigMesh: function (nbFacesNext) {
    return 'Наступний рівень ' + nbFacesNext + ' faces.\n' +
      'Якщо ви не впевнені, натисність знову на "роздільна здатність".';
  },
  multiresNotReversible: 'Нажаль це неможливо, щоби змінити цю сітку.\n' +
    'Сітка не продуктивна.',

  // remesh
  remeshTitle: 'Перебудувати вокселі',
  remeshRemesh: 'Перебудувати',
  remeshResolution: 'Роздільна здатність',
  remeshBlock: 'Блоки-кубіки',

  // dynamic
  dynamicTitle: 'Динамічна топологія',
  dynamicActivated: 'Активувати (без кубиків)',
  dynamicSubdivision: 'Збільшити',
  dynamicDecimation: 'Проріджування',
  dynamicLinear: 'Лінійне маштабування',

  // sculpt
  sculptTitle: 'Ліпити та фарбувати',
  sculptBrush: '3D Пензлик',
  sculptInflate: '3D Надути',
  sculptTwist: '3D Закручування',
  sculptSmooth: '3D Згладити (-Shift)',
  sculptFlatten: '3D Розплющити',
  sculptPinch: '3D Стиснути',
  sculptCrease: '3D Складка',
  sculptDrag: '3D Тянгнучка',
  sculptMove: '3D Переміщати',
  sculptLocalScale: '3D маштабування',
  sculptPaint: '2D Пензлик',
  sculptMasking: '2D Маска (-Ctrl)',
  sculptTransform: 'Трансформація',

  sculptCommon: 'Загальне',
  sculptTool: 'Інструмент',
  sculptSymmetry: 'Симетрія',
  sculptContinuous: 'Розпилювач',
  sculptRadius: 'Розмір (-X)',
  sculptIntensity: 'Сила (-C)',
  sculptHardness: 'Жорсткість',
  sculptCulling: 'Тонка поверхня(фронтальні вершини)',
  sculptAlphaTitle: 'Альфа',
  sculptLockPositon: 'Фіксація',
  sculptAlphaTex: 'Текстура',
  sculptImportAlpha: 'Імпорт альфа текстури (jpg, png...)',
  sculptNegative: 'Негатив (N або -Alt)',
  sculptColor: 'Палітра',
  sculptRoughness: 'Шороховатість',
  sculptMetallic: 'Металевий',
  sculptClay: 'Без урахування вмісту',
  sculptAccumulate: 'Нарощувати без обмежень',
  sculptColorGlobal: 'Глобальний',
  sculptPickColor: 'Піпетка матеріал (-S)',
  sculptTangentialSmoothing: 'Згладжування щодо дотичної',
  sculptTopologicalCheck: 'Перевірка топології',
  sculptMoveAlongNormal: 'Переміщати вздовж нормалі',
  sculptMaskingClear: 'Очистити (-Ctrl + Drag)',
  sculptMaskingInvert: 'Інверсія (-Ctrl + Click)',
  sculptMaskingBlur: 'Згладити',
  sculptMaskingSharpen: 'Різко',
  sculptPBRTitle: 'PBR матеріал',
  sculptPaintAll: 'Фарба',
  sculptExtractTitle: 'Вилучити',
  sculptExtractThickness: 'Товщина',
  sculptExtractAction: 'Вилучити!',

  // states
  stateTitle: 'Істория',
  stateUndo: 'Назад',
  stateRedo: 'Вперед',
  stateMaxStack: 'Кількість кроків',

  // pressure
  pressureTitle: 'Настройки планшету',
  pressureRadius: 'Натиск-розмір',
  pressureIntensity: 'Натиск-жорсткість',

  // rendering
  renderingTitle: 'Візуалізація',
  renderingGrid: 'Відобразити сітку',
  renderingSymmetryLine: 'Лінія симетрії',
  renderingMatcap: null,
  renderingCurvature: "Рель'єфність",
  renderingPBR: 'PBR',
  renderingTransparency: 'Прозорість',
  renderingNormal: 'Карта нормалей',
  renderingUV: 'UV',
  renderingShader: 'Шейдери',
  renderingMaterial: 'Матеріал',
  renderingImportUV: 'Імпорт (jpg, png...)',
  renderingImportMatcap: 'Імпорт (jpg, png...)',
  renderingExtra: 'Додатково',
  renderingFlat: 'Площини',
  renderingWireframe: 'Каркас (W)',
  renderingExposure: 'Експозиція',
  renderingEnvironment: 'Відзеркалення',
  renderingIsolate: 'Ізолювати / Відобразити (I)',
  renderingFilmic: 'Плівка',

  // contour
  contour: 'Контур',
  contourShow: 'Відобразити контур',
  contourColor: 'Колір',
  darkenUnselected: 'Затемнити необране',

  // pixel ratio
  resolution: 'Роздільна здатність',

  // matcaps
  matcapPearl: 'Перли',
  matcapClay: 'Глина',
  matcapSkin: 'Шкіра',
  matcapGreen: 'Зелений',
  matcapWhite: 'Білий',

  // sketchfab
  sketchfabTitle: 'В Sketchfab.com ',
  sketchfabUpload: 'Завантажити',
  sketchfabUploadMessage: 'Введіть API-ключ sketchfab.\n' +
    'Залиште слово «guest», щоби завантажити модель анонімно.\n' +
    '(По завершенню завантаження і обробки відкриється нове вікно)',
  sketchfabUploadError: function (error) {
    return 'Помилка завантаження в Sketchfab :\n' + error;
  },
  sketchfabUploadSuccess: 'Завантаження виконане !\nВаше посилання:',
  sketchfabAbort: 'Перервати завантаження?',
  sketchfabUploadProcessing: 'Обробка...\nВаша модель буде доступна після:',

  about: 'Про програму',

  alphaNone: 'Ні',
  alphaSquare: 'Квадрат',
  alphaSkin: 'Шкіра'
};

export default TR;
