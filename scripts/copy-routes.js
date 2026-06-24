import fs from "fs";
import path from "path";

const outDir = "docs";

const routes = [
  // 학회소개
  "introduction",
  "introduction/history",
  "introduction/activities",
  // 구성원
  "members",
  // 학술활동
  "study",
  "study/group",
  "study/seminar",
  "study/night-seminar",
  // 초청강연
  "lectures",
  "lectures/external",
  // 교류활동
  "exchange",
  "exchange/mogakco",
  "exchange/mt",
  // 학회원 활동
  "activities",
  "activities/awards",
  "activities/gallery",
];

const indexPath = path.join(outDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error(`❌ ${indexPath} 파일이 없습니다. vite build가 먼저 실행되어야 합니다.`);
  process.exit(1);
}

for (const route of routes) {
  const routeDir = path.join(outDir, route);
  const routeIndexPath = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexPath, routeIndexPath);

  console.log(`✅ Created ${routeIndexPath}`);
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

console.log("🎉 SPA route index files created successfully.");
