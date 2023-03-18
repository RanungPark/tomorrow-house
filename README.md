# 내일의 집

### 1. GNB

- 로그인을 하지 않을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색색 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/" class="">로그인</a>

    <a href="/" class="">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="gnb-right">
  <div class="input-group lg-only">
    <i class="ic-search" aria-hidden></i>
    <input class="form-input" type="text" placeholder="스토어 검색" />
  </div>

  <div class="button-group">
    <button
      class="gnb-icon-button is-search lg-hidden"
      type="button"
      aria-label="검색색 열기 버튼"
    >
      <i class="ic-search"></i>
    </button>

    <a
      href="/"
      class="gnb-icon-button sm-hidden"
      aria-label="스크랩북 페이지로 이동"
    >
      <i class="ic-bookmark"></i>
    </a>

    <a
      href="/"
      class="gnb-icon-button sm-hidden"
      aria-label="내 소식 페이지로 이동"
    >
      <i class="ic-bell"></i>
    </a>

    <a
      href="/"
      class="gnb-icon-button is-cart"
      aria-label="장바구니 페이지로 이동"
    >
      <i class="ic-cart"></i>
      <strong class="badge">5</strong>
    </a>

    <button
      class="gnb-avatar-button sm-hidden"
      type="button"
      aria-label="마이메뉴 열기 버튼"
    >
      <div class="avatar-32">
        <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
      </div>
    </button>
  </div>
</div>
```
