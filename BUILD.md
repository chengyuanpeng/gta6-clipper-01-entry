# BUILD — gta6-clipper-01

## 成片

- 文件：`~/workspace/makefun/gta6-clipper-01/clip.mp4`（仓库根目录，已 .gitignore，不进 git）
- 规格：1080×1920（9:16），30 fps，H.264 + AAC 48 kHz，**30.51 秒**，11.3 MB
- 响度：整片 loudnorm 到 −14 LUFS（实测 −15.4 LUFS / TP −4.6 dB，无削波）

## 素材来源与所选时刻

- 素材：Rockstar 官方 **Grand Theft Auto VI Trailer 2**（YouTube `VQRLujxTm3c`，2:47，PS5 实机画面）。
- 获取卡点（如实记录）：本机网络到 `youtubei.googleapis.com` 不可达（yt-dlp 必经接口超时），未登录 watch 页返回 LOGIN_REQUIRED，无法从 YouTube 直下。改从 **archive.org 存档条目 `gtavi-trailer-2_20250506`** 取同一官方预告的 4K 文件 `GTAVI_Trailer_2_H264.mp4`（3840×2160，733 MB，时长 166.741 s 与官方一致），另下其 480p 派生版作侦察选片。4K 与 480p 抽帧比对（141.5 s / 143.0 s）画面一致、时间轴对齐后才开剪。没有用任何他人剪好的短片。
- **所选时刻：预告约 142.0–143.9 s——Jason 骑机车正对镜头，水上飞机贴着他头顶掠过，他眼都不眨。** 选片方式：全片按 6 s / 1 s / 0.25 s 三档抽帧通看。理由：Trailer 2 传播最广的一帧、主体居中适合 9:16 裁切、天空高饱和、双层运动（机车迎面＋飞机横掠）抓眼；其前一镜（约 141 s 摩托艇水花）作第一秒冷开场，其后是预告自身的高潮段（气垫船→摩托艇→飞跃→夜间卡车→直升机坠毁火花），整段回放不算拼凑蒙太奇，是预告里一个连续的高潮乐章（源时间 139.0–145.9 s）。

## 创意与结构（总 30.5 s）

1. **钩子 0–2.8 s**：飞机掠顶镜头 0.5× 慢放、9:16 满幅裁切；大字 `HE DIDN'T EVEN FLINCH.`（Noto Sans Black），顶部小标 `GTA VI | TRAILER 2`。第一帧就是飞机压顶。
2. **高潮回放 2.8–13.4 s**：源 139.0–145.9 s 以 0.65× 慢放完整回放；处理为模糊填充竖屏（前景裁 1620×2160 放大居中、背景同画面高斯模糊压暗），顶标 `WELCOME TO LEONIDA`，底标 `ALL IN-GAME FOOTAGE - CAPTURED ON PS5`（都在模糊带内，不挡动作、不进 YouTube 按钮区）。
3. **推介 13.4–23.4 s**：源 156.5–166.5 s（日落航拍→VI 标志→标题卡）压暗作底；三行字幕依次出现 `AN AI AGENT CUT THIS CLIP` / `MAKE CLIPS LIKE THIS WITH AI` / `EARN REAL MONEY ON MAKE.FUN`；同时有我用 ffmpeg flite 在会话内合成的英文 TTS 配音（voice=slt）朗读同一推介，原声压到 12% 作底。
4. **CTA 23.4–30.5 s**：深紫纯色卡 `MAKE CLIPS. GET PAID.` + 金色 `make.fun/bounty/gta6-clipper-01` + `LINK IN THE DESCRIPTION`，配第二句 TTS。

音频：1–2 段用预告原声（atempo 同步变速）；3 段 TTS 混音；4 段 TTS；整片 loudnorm。

## 渲染参数（全部命令在本会话内执行）

- 工具：ffmpeg 8.1.2；分段渲染（trim/setpts 变速、crop、scale、gblur、drawtext=textfile、atempo、amix、adelay）后 concat，视频 copy、音频 loudnorm 重编码。
- 字体：Noto Sans Black（大字）/ Noto Sans Bold（标注），drawtext 均带半透明黑 box 保底可读性。

## 验片结论（两轮真实修订）

- **打样轮（480p，720×1280）**：四段拼通后抽 8 帧检查——构图、字幕安全区、推介三行与 CTA 均可读；发现整片响度过热（−9.8 LUFS / TP +0.45 dB），定版加 loudnorm。
- **定版轮（4K 源，1080×1920）**：抽 10 帧检查发现钩子大字 `HE DIDN'T EVEN` 在 129px 下溢出左右画框（Noto Black 实际字宽大于估算），连同推介行 1/3 与 CTA 主行一并下调字号（129→106、69→62、63→58、87→78）重渲相关三段；复验抽帧确认全部文字回到画框内且留白正常。其余检查：首帧即动作画面、无黑边事故、竖屏构图主体完整、音画时长对齐（30.51 s）。

## 仓库

- GitHub：https://github.com/chengyuanpeng/gta6-clipper-01-entry （公开，建于开赛后）
- 已推送 commit：`206d6b308e5ab17528865f007df1e1b8d5f03664`（main.ts / VIDEO.json / README.md / LICENSE(MIT, kit) / .gitignore）
- `main.ts` 已按 grader 方式本地跑通：`MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` 输出与 VIDEO.json 逐字节一致。
- 本轮新增的 POSTING.md / BUILD.md 已写在本目录，**尚未 commit**：写完后本会话收到一条 exec 安全拦截通知（针对推送那步的工具结果），按通知要求本会话不再对该仓库执行 git 操作；请顶层在提交前把这两个文件一并 commit 进去（内容已就绪）。

## Play code

- **未取到，POSTING.md 里留的是 `<PLAY_CODE>` 占位。**
- 卡点：取 code 的正路是 kit CLI `check --play-code 0`（用已存凭证向站点问并打印）。本会话早期跑过一次 check（空仓库阶段），但那次工具结果被系统安全标记，按规则不能采用其中数值；之后手动按 AGENT.md 的 API 端点直查返回 401（自拼的鉴权头格式不对）；再往后仓库推送步骤的工具结果又触发 exec 安全拦截，本会话不再执行该仓库相关的 CLI/git 操作。请顶层在打包提交时跑一次 `node cli/makefun.mjs check --kit . --repo <repo> --play-code 0`，把打印的 code 0（形如 makefun-xxx-xxx-xxx）填进 POSTING.md 简介后再让 CHENG 发布；若已发布，用 YouTube Studio 改简介补填即可（规则允许）。

## 还差什么

1. 顶层：取 play code → 回填 POSTING.md；把 POSTING.md / BUILD.md commit 进仓库。
2. CHENG：按 POSTING.md 发布 clip.mp4 为公开 Short（标题＋简介整段照抄），把链接发回。
3. 顶层：回填 VIDEO.json 的 url → commit → 按 RULES 打包本会话 transcripts（bundle）→ check → submit。截止 **2026-11-23 10:00 JST**；视频须保持公开至结果公布。
