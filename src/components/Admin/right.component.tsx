import { Component, Vue } from 'vue-property-decorator';
// 导入右侧总量数字
import result from '@/components/Admin/result.vue';
@Component({
  components: {
    result
  }
})
export default class Right_Admin extends Vue {
  private orange: string = 'orange';

  protected render() {
    return (
      <section class="admin-wrap-right">
        <div class="admin-wrap-info">
          <article class="admin-wrap-info-name">
            <h4>Hello,</h4>
            <h4 class="bold">Miya</h4>
          </article>
          <article class="admin-wrap-info-avatar">
            <svg
              t="1592386222301"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1418"
            >
              <path
                d="M512.172895 0.116652C229.337738 0.116652 0.23747 229.337738 0.23747 512.052077c0 174.128036 86.930701 327.933635 219.772278 420.417802v-0.004166l-0.004166-0.004166 0.091655-0.299963a292.496438 292.496438 0 0 1 10.948619-31.266889l0.191643-0.470774c1.162353-2.778816 2.387199-5.520137 3.632875-8.244793a274.444548 274.444548 0 0 1 5.057695-10.544503c0.633253-1.249842 1.291504-2.487186 1.941422-3.724531a266.21642 266.21642 0 0 1 3.707865-6.894963c0.716576-1.279005 1.47898-2.520515 2.216387-3.787023a280.252149 280.252149 0 0 1 6.595002-10.736145c1.13319-1.758112 2.258049-3.524555 3.4329-5.249338 1.108194-1.637293 2.258049-3.232926 3.395405-4.841056a284.851569 284.851569 0 0 1 7.282415-9.807096c0.829062-1.0582 1.649792-2.120566 2.491352-3.170434l0.266633-341.448596h0.066659c-0.074991-2.437193-0.18331-4.861887-0.183311-7.31991 0-0.437445 0.029163-0.866557 0.03333-1.304003-2.807979-153.751439 140.894728-246.531403 241.052927-239.728094 102.149615-6.928293 249.82682 89.430386 241.323726 248.352007l-0.233304 0.12915 0.262467 341.527753c0.645752 0.808231 1.287338 1.628961 1.924757 2.445525 1.383159 1.762278 2.741321 3.545386 4.078652 5.340993 1.104027 1.474814 2.178892 2.978791 3.253757 4.478602 1.29567 1.808105 2.587174 3.612044 3.837016 5.457645 1.116526 1.645626 2.183058 3.328747 3.27042 5.003535a277.964938 277.964938 0 0 1 5.611793 9.048859c1.162353 1.958086 2.333039 3.903674 3.445398 5.890923 0.987375 1.762278 1.928923 3.557885 2.878804 5.340993 1.024871 1.924757 2.041409 3.853681 3.028784 5.811767a290.063412 290.063412 0 0 1 5.599294 11.836007c0.720742 1.60813 1.449817 3.207929 2.137231 4.832724 1.37066 3.228759 2.682995 6.503346 3.941169 9.80293 0.23747 0.620755 0.495771 1.229012 0.733241 1.849767 1.499811 4.020326 2.899634 8.098978 4.236965 12.219292 0.333291 1.029037 0.63742 2.070572 0.958213 3.103775 0.649918 2.083071 1.324833 4.14531 1.933089 6.253378a0.570761 0.570761 0 0 1-0.083322 0.05416v0.004166c132.799915-92.488334 219.734783-246.26477 219.734782-420.351144C1024.104154 229.337738 794.887233 0.116652 512.172895 0.116652z"
                fill="#F4B3B3"
                p-id="1419"
              />
              <path
                d="M276.206826 827.129a277.489998 277.489998 0 0 1 8.065649-9.061357c0.229138-0.249968 0.470774-0.479106 0.699912-0.724909a278.123251 278.123251 0 0 1 8.073982-8.219796c0.837394-0.812398 1.695619-1.612297 2.541346-2.416362a264.970743 264.970743 0 0 1 9.540463-8.686404c0.404116-0.349956 0.795733-0.708244 1.204015-1.0582v0.05416c23.551196-20.184954 50.689439-36.628713 80.789809-48.689692a313.4063 313.4063 0 0 1 24.221945-8.557254c0.716576-0.220805 1.42482-0.449943 2.145562-0.666583a326.458821 326.458821 0 0 1 26.884109-6.832471c0.995708-0.212473 2.003914-0.395783 3.007954-0.595758a344.402391 344.402391 0 0 1 14.63982-2.608005c3.416236-0.5291 6.857468-1.00404 10.323698-1.437318 1.270673-0.158313 2.533014-0.337457 3.816185-0.483273a361.529397 361.529397 0 0 1 14.148216-1.353996H512.343707v-0.116652l-0.174978 0.004167c-130.662685 0-236.961776-103.986883-240.84462-233.712187h-0.066659l-0.266633 341.448597c0.737407-0.916551 1.499811-1.812271 2.249717-2.716324 0.987375-1.183184 1.962252-2.391365 2.966292-3.570383z"
                fill="#FECF77"
                p-id="1420"
              />
              <path
                d="M512.172895 725.687629l0.174978-0.004166c130.479375-0.091655 236.624319-103.878563 240.66131-233.399726-64.012759 39.253382-230.504258-18.197705-280.189657-105.620011-46.423311 81.356404-125.063391 153.359822-201.437091 105.315883-0.158313-2.912133-0.149981-5.753441-0.204141-8.623912 0 0.433279-0.033329 0.866557-0.033329 1.304002 0 2.453857 0.112486 4.882717 0.18331 7.31991 3.878677 129.721137 110.181935 233.70802 240.84462 233.70802z"
                fill="#FCE9EA"
                p-id="1421"
              />
              <path
                d="M472.815359 386.663726c49.685399 87.422306 216.176898 144.869226 280.189657 105.620011-4.036991 129.525328-110.177769 233.308071-240.661309 233.399726v0.116652h25.688426c4.753567 0.354122 9.452974 0.82073 14.123218 1.349829 1.328999 0.154147 2.6455 0.337457 3.966167 0.499937 3.387073 0.429113 6.753315 0.891554 10.09456 1.408156a335.599334 335.599334 0 0 1 14.381519 2.549678c1.191516 0.23747 2.387199 0.454109 3.570383 0.708244a326.417159 326.417159 0 0 1 26.342511 6.682491c1.154021 0.34579 2.291378 0.720742 3.437066 1.07903a313.335476 313.335476 0 0 1 13.314987 4.461938c2.949628 1.066532 5.865927 2.174726 8.761395 3.320414 30.025379 11.873502 57.126127 28.079791 80.685656 48.006445v-0.070825c0.541598 0.454109 1.054034 0.937382 1.591466 1.395658 1.574801 1.353996 3.137104 2.724656 4.682742 4.111981 1.483146 1.337331 2.945462 2.695493 4.403612 4.066154 1.545638 1.449817 3.091277 2.887136 4.599419 4.370282 1.441485 1.416488 2.837142 2.870471 4.245298 4.320288a272.390641 272.390641 0 0 1 7.711527 8.253126c1.29567 1.441485 2.599672 2.866305 3.862013 4.336953 1.449817 1.687287 2.853807 3.416236 4.261963 5.141018 0.499937 0.612423 1.020705 1.216513 1.520641 1.837268l-0.262467-341.527753 0.233304-0.129151c8.503094-158.92162-139.174111-255.280299-241.323726-248.352006h0.058326c8.348947 29.562938-8.303119 88.409681-39.478354 143.044456z"
                fill="#FCBA6F"
                p-id="1422"
              />
              <path
                d="M784.913492 882.447022zM790.512785 894.287195c0.720742 1.60813 1.445651 3.207929 2.137231 4.832724-0.687413-1.624795-1.416488-3.224593-2.137231-4.832724zM769.952879 856.358646zM265.154054 840.989751zM762.841276 845.897466c1.29567 1.808105 2.587174 3.612044 3.837016 5.457645-1.245676-1.845601-2.541346-3.64954-3.837016-5.457645zM779.005903 871.298428c0.987375 1.762278 1.928923 3.557885 2.878804 5.340993-0.94988-1.787275-1.887262-3.578715-2.878804-5.340993zM796.591185 908.922849c0.23747 0.620755 0.495771 1.229012 0.733241 1.849767-0.23747-0.620755-0.495771-1.229012-0.733241-1.849767zM716.709595 795.86211c-23.559528-19.926653-50.660276-36.137108-80.685656-48.006444l0.737407 0.287464v134.016428h-251.301634V748.988856c0.549931-0.224972 1.11236-0.437445 1.666456-0.65825-30.104536 12.060979-57.238613 28.504738-80.789809 48.689692v183.81848a512.10207 512.10207 0 0 1-86.322445-48.368899v0.004166c82.843717 57.671892 183.52685 91.517623 292.158981 91.517623 81.456392 0 158.44668-19.060096 226.817223-52.909993a509.352417 509.352417 0 0 1-22.280523 10.294535v-185.5141zM257.821645 851.242625c1.108194-1.637293 2.258049-3.232926 3.395405-4.841056-1.137357 1.60813-2.287211 3.207929-3.395405 4.841056zM739.198425 970.973355a511.393826 511.393826 0 0 0 65.175112-38.570134v-0.004167a512.293713 512.293713 0 0 1-65.175112 38.574301zM801.557225 922.991908c0.333291 1.029037 0.63742 2.070572 0.958213 3.103775-0.316627-1.033203-0.620755-2.074738-0.958213-3.103775zM755.508867 836.077871zM220.101403 932.161584zM236.336855 889.004528zM247.79791 867.228108zM231.241665 900.423921zM241.873657 877.91426c1.216513-2.316374 2.433026-4.624417 3.707866-6.894963-1.279005 2.266381-2.491352 4.578589-3.707866 6.894963zM284.972387 817.3469c-0.229138 0.245802-0.470774 0.47494-0.699912 0.724909 0.229138-0.249968 0.470774-0.483272 0.699912-0.724909zM293.046369 809.127104c0.837394-0.812398 1.695619-1.612297 2.541346-2.416362-0.845727 0.804065-1.703952 1.603964-2.541346 2.416362zM397.795656 744.281117zM276.206826 827.129c-1.00404 1.179018-1.978917 2.387199-2.962126 3.578715 0.983209-1.191516 1.958086-2.399697 2.962126-3.578715zM440.377784 732.278464c0.995708-0.212473 2.003914-0.395783 3.007954-0.595758-0.999874 0.199975-2.012246 0.383285-3.007954 0.595758zM468.34509 727.637383c1.270673-0.158313 2.533014-0.337457 3.816185-0.483272-1.283171 0.145815-2.545512 0.324959-3.816185 0.483272zM411.348113 739.773352c0.716576-0.220805 1.42482-0.449943 2.145563-0.666582-0.720742 0.216639-1.428986 0.449943-2.145563 0.666582zM453.971903 729.728786zM305.128178 798.024338zM727.387415 805.369245c1.541472 1.449817 3.091277 2.887136 4.599419 4.370282-1.508143-1.483146-3.053781-2.924631-4.599419-4.370282zM610.514657 738.99845c1.154021 0.34579 2.295544 0.720742 3.437066 1.07903-1.145689-0.358288-2.283045-0.733241-3.437066-1.07903zM623.225553 743.106265zM722.983803 801.303091zM552.155351 727.149944c1.328999 0.154147 2.6455 0.337457 3.966167 0.499937-1.320667-0.16248-2.633001-0.34579-3.966167-0.499937zM580.597597 731.607715c1.191516 0.23747 2.387199 0.454109 3.570383 0.708244-1.179018-0.249968-2.378867-0.470774-3.570383-0.708244zM743.935327 822.312941zM566.216078 729.058037zM752.063469 831.790912c-1.412322-1.724782-2.816311-3.453731-4.261963-5.141018 1.445651 1.687287 2.849641 3.416236 4.261963 5.141018z"
                fill="#A0D9F6"
                p-id="1423"
              />
              <path
                d="M623.225553 743.106265a321.796909 321.796909 0 0 0-9.27383-3.032951c-1.141523-0.358288-2.283045-0.733241-3.437066-1.07903a330.404156 330.404156 0 0 0-26.342511-6.682491c-1.183184-0.254135-2.378867-0.470774-3.570383-0.708244a322.884272 322.884272 0 0 0-14.381519-2.549678 372.432188 372.432188 0 0 0-10.09456-1.408156c-1.320667-0.16248-2.637167-0.34579-3.966166-0.499937a368.461856 368.461856 0 0 0-14.123219-1.349829H486.313657a361.529397 361.529397 0 0 0-14.148216 1.353995c-1.279005 0.145815-2.541346 0.324959-3.816185 0.483273a355.763458 355.763458 0 0 0-14.373187 2.091403c-3.557885 0.599924-7.086606 1.249842-10.590331 1.95392-0.999874 0.199975-2.00808 0.383285-3.007954 0.595758a326.458821 326.458821 0 0 0-26.884108 6.832472c-0.720742 0.216639-1.428986 0.445777-2.145563 0.666582a322.276015 322.276015 0 0 0-13.548291 4.507765c-3.599546 1.291504-7.15743 2.641333-10.673654 4.049489-0.554097 0.220805-1.116526 0.433279-1.666456 0.65825v133.170702h251.301634v-134.016428l-0.737407-0.287464a322.31351 322.31351 0 0 0-12.798386-4.749401z m-111.173476 105.986631a15.231412 15.231412 0 1 1-0.004166-30.46699 15.231412 15.231412 0 0 1 0.004166 30.46699z m0-55.151377a15.235578 15.235578 0 1 1 0-30.475322 15.235578 15.235578 0 0 1 0 30.475322zM306.332193 797.020298v-0.05416c-0.408282 0.349956-0.799899 0.708244-1.204015 1.0582a272.032353 272.032353 0 0 0-9.540463 8.686404c-0.845727 0.804065-1.703952 1.603964-2.541346 2.416362a278.123251 278.123251 0 0 0-8.073982 8.219796c-0.229138 0.245802-0.470774 0.47494-0.699912 0.724909a277.489998 277.489998 0 0 0-8.065649 9.061357c-1.00404 1.179018-1.978917 2.387199-2.962126 3.578715-0.749905 0.908219-1.512309 1.803939-2.249716 2.716324-0.841561 1.049868-1.66229 2.112234-2.491353 3.170434a284.851569 284.851569 0 0 0-7.282415 9.807096c-1.141523 1.60813-2.291378 3.207929-3.395405 4.841056-1.174852 1.724782-2.295544 3.491226-3.4329 5.249338a278.235737 278.235737 0 0 0-6.595001 10.736146c-0.737407 1.266507-1.495645 2.512183-2.216387 3.787022-1.274839 2.270547-2.491352 4.582755-3.707866 6.894963-0.649918 1.237344-1.304002 2.474688-1.941422 3.724531a280.181325 280.181325 0 0 0-3.59538 7.369903c-0.495771 1.054034-0.974877 2.112234-1.462315 3.1746a287.030461 287.030461 0 0 0-3.632875 8.244793l-0.191643 0.470774a291.584053 291.584053 0 0 0-10.948619 31.26689c-0.029163 0.099987-0.066658 0.199975-0.091655 0.299962l0.004166 0.004166a511.810441 511.810441 0 0 0 86.322445 48.368899v-183.81848zM804.452694 932.349061c-0.608257-2.108067-1.283171-4.170307-1.93309-6.253378-0.320793-1.033203-0.624921-2.074738-0.958212-3.103775a289.25518 289.25518 0 0 0-4.236966-12.219292c-0.23747-0.620755-0.495771-1.229012-0.733241-1.849767a296.833391 296.833391 0 0 0-3.941169-9.80293c-0.691579-1.628961-1.416488-3.224593-2.137231-4.832724a265.354028 265.354028 0 0 0-8.628078-17.647774c-0.954046-1.787275-1.891428-3.578715-2.878804-5.340993-1.116526-1.991415-2.283045-3.932837-3.445398-5.890923a277.964938 277.964938 0 0 0-5.611792-9.048859c-1.087363-1.674789-2.158061-3.362076-3.270421-5.003535-1.249842-1.841434-2.541346-3.64954-3.837016-5.457645a254.392911 254.392911 0 0 0-7.332409-9.819595 275.915196 275.915196 0 0 0-1.924757-2.445525c-0.499937-0.620755-1.020705-1.224845-1.520641-1.837268-1.412322-1.724782-2.816311-3.453731-4.261963-5.141018-1.262341-1.470648-2.566343-2.895468-3.862013-4.336953a267.516256 267.516256 0 0 0-7.711527-8.253126c-1.408156-1.449817-2.803813-2.9038-4.245298-4.320288-1.503977-1.47898-3.053781-2.920465-4.59942-4.370282-1.458149-1.366494-2.916299-2.724656-4.403611-4.066154a292.32146 292.32146 0 0 0-4.682742-4.111981c-0.537432-0.458276-1.049868-0.941548-1.591466-1.395658V981.37621a509.352417 509.352417 0 0 0 22.48883-10.394522 512.493688 512.493688 0 0 0 65.175112-38.574301l0.083323-0.058326z"
                fill="#FEFEFE"
                p-id="1424"
              />
              <path
                d="M512.052077 778.710107m-15.235578 0a15.235578 15.235578 0 1 0 30.471156 0 15.235578 15.235578 0 1 0-30.471156 0Z"
                fill="#A0D9F6"
                p-id="1425"
              />
              <path
                d="M512.052077 833.857318m-15.231412 0a15.231412 15.231412 0 1 0 30.462824 0 15.231412 15.231412 0 1 0-30.462824 0Z"
                fill="#A0D9F6"
                p-id="1426"
              />
              <path
                d="M271.378269 491.975443c76.3737 48.04394 155.01378-23.959478 201.43709-105.315883 31.171068-54.630609 47.823134-113.477353 39.474188-143.036124h-0.058326c-100.162366-6.799142-243.865072 85.980821-241.052927 239.728094 0.049994 2.870471 0.045828 5.715946 0.199975 8.623913z"
                fill="#FECF77"
                p-id="1427"
              />
            </svg>
          </article>
        </div>
        <div class="admin-wrap-results">
          <result></result>
          <result colorClass="orange"></result>
          <result></result>
          <result></result>
        </div>
        <div class="admin-wrap-extra">
          <header class="extra-title">
            <article class="primany-title">TODOs</article>
            <article class="second-title">Feed</article>
          </header>
          <article class="extra-wrap">
            <ul class="todo-list">
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
              <li class="todo-list-item">
                <p class="todo-text">Test Text</p>
                <span class="todo-delete"> × </span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}