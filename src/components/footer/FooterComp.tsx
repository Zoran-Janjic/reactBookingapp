import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"; // Import Link from React Router DOM

export default function FooterCompo() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAA0lBMVEX////rWVgAAADwWlnBW1nW19j6+vq9W1nv7+/29vbS09Tn6Onr7OzMzc4AIivCxMWsrq98f4I5QEW8vr/kWVjg4eEuNTuys7WipKZARUsAChgAEBwAFyEAAAxlQUQ6NzzHU1MSIysjNDonLjV1R0mqVVTRVVXKXVtfY2dJTVKOkJIAABSWmJscLTQAKzJOPUJnODxNW2CuT1A/MTeBRkkwISiYTk+eSUsvKzJ+PUBkbXAePkS0S00UER1aQUVTJy0xGCCMQEJRMjYxS1FEJSseIiV36NnVAAAEUElEQVR4nO2aaXPiOBBAbQsZn7GFbyDGBwHb4UggC4OXzWySyf//SyuTMEOOIVRtbTVb1S+pAusD9apbLbUEgoAgCIIgCIIgCIIgCIIgCIIgCIKcF4reoKi/RuSq0OF83mCYNovyfve62+32+tNOMXGowsf1y3SqQcs10KpI+xezbDCPG+4H+azfy4rKE+hlfHOrfv0J/zEey6fTwXAxcskrougm6+FyOmVO7879I4Q2dPw0i1ctl4sdwEXdZHiRZ3dkncmwhnY+HVy12q74ESIusmxI3G82rGEvG7ZardEnho1kkmWEbGrIMHrprDFMPjfkjuuZS5I/PThDtZ7ec8PWZ2l+JV4R8gyYaSfl8/C3ad6FcTRvMg1mKLOL4bj1ea38dIxHZDsDWxqNftZuZiI5ppgsyOgvCqXo9O7Hx/PMcRei+x1sMrKLO244PpZnTiKSDYNSvM2vjq04+0y7ZH0LZCh3Bosv8yyKfO/eRgqMou7ft7+o530gO0CLN83ipqC/NOSBzICaRm0at05TdDMLSrHZn8fHVsXzUBydoCiCKra/KuiXKJowil4Wn6ZIRhnQDqj68Ulrjki2Haijajlvn6YItrsI9XJxmiLcHm33f3Owej8V/wYqaF4vvdX4oyI/R5M3CxFvaYG2aF4vZTz+UNGkdT+P3wySR7A8N5luv++5ySLbuqvFwSDZQp4Avc7d+N0GSJLtenGYaOIuKzhDQQi/Xb1vI/ixee4eGt48wV6YlI8fDtHu4jD37jADTHMD9eMPfcQ+zbuX1SxjYOe/V8domYiHkvv3ZLurGULWy0vg6zuv7m+SXyshWb9ElQ8MVrsbPTK6uXRgHWWzzB8ftq64u/5czbkXEd3k4TGfLl9Gk29wNyZ7tEn9NHv+cbPZ3FxsHjbffzzPnurKNIt+Gm82d2kKtgEeoHrUsicVY6xmbBJY1GtWGsVit9lTWZ3FjTzyL1AMQ9BlQ1UUxRAUpfk3ZP6gyLzNNvizwV8MsD6HY0SSZPE/VpSsq5S1wAbas1Xe1qUj6dp1IdS+rudSCrh2q2a38iQzL4o68K1OIASdwLeLihWWZDhpIbPSMDqMQoZRkQJZMv1Op9Aj1jcEmjOfdRxW8CiGaeTtFCvQNsJ4UfTzQi7yiIc1Lf2yR5kfXeus8LVGMcoZ5Fdsyk9FYXLdtIV+WuWSXJeVpJehb1Wl0iQa0HCvWEeFrEnNRlzzmZkLdWFK1C/zsIqoF1UKZKYNyVYl67kqy1dFJul+IRS8ogNpEtXs0g+jtIDsGOXQk0PdppYjKGEjQkPZMQXH8UJqq2Zg2qHn2AH8173/J+Sjj6BQ0wg9GqoOz3UoaJZim56phsCHljeYmmHvFPmkswWbeo5jUjk0oL0OUIJGcaI2F522EGheYGmOZ59TonVdprJCm/ZG0BTVkzVDpio9l9+/IAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCnDX/AJz4Yqq56UJbAAAAAElFTkSuQmCC"
              width={105}
              height={100}
              alt="Logo"
            />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
