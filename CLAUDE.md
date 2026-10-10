# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

링크나무 (Link in Bio Service). Linktree처럼 내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유할 수 있는 서비스.

## 기술 스택

- Next.js 16 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능

- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 링크 클릭 수 집계 (MongoDB Atlas에 저장)

## 참고 문서

- `PRD.md` — 서비스 개요, 타깃 사용자, 핵심 기능(프로필, 링크 카드, 클릭 수 집계), 출시 범위. 기능을 추가하거나 바꾸기 전에 먼저 확인할 것.
- `wireframe.png` — 모바일 화면 와이어프레임. 위에서 아래로 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 목록(세로로 나열) 순서의 단일 열 레이아웃. UI를 만들거나 수정할 때 이 구조를 따를 것.

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수는 `.env.local`에 저장 (절대 커밋하지 않음)
- 모바일 우선 반응형 디자인 (Tailwind 기본 클래스를 모바일 기준으로 작성하고 `sm:`/`md:` 등으로 확장)

## 명령어

- `npm run dev` — 개발 서버
- `npm run build` / `npm start` — 프로덕션 빌드 / 실행
- `npm run lint` — ESLint (테스트 러너는 아직 설정되지 않음)

## 구조

- `src/app/` — App Router 라우트, `src/components/` — 컴포넌트, import alias는 `@/*` → `src/*`
- `.gitignore`가 `.env*`를 제외하므로 `.env.local`은 커밋되지 않음
- 링크/프로필 데이터는 `src/data/profile.ts`에 하드코딩. 링크 카드는 `/go/[id]` Route Handler로 이동하며, 이때 `src/lib/clicks.ts`가 MongoDB `clicks` 컬렉션(`{_id: linkId, count}`)에 카운트를 올린 뒤 307 리다이렉트한다. `MONGODB_URI` 미설정 시 집계만 건너뛰고 리다이렉트는 동작 (`.env.example` 참고)

## Next.js 16 주의

`AGENTS.md`에 따르면 이 버전은 기존 지식과 다른 breaking change가 있다. 코드를 쓰기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽을 것.
