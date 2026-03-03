app.post("/start", (req, res) => {
  const { mode, target, reply, time } = req.body;

  res.json({
    status: "running",
    message: `😈 Bot Started\nMode: ${mode}\nTarget: ${target}\nMsg: ${reply}\nTime: ${time}s`
  });
});
