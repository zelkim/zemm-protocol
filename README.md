# Zemm Protocol
Accelerating connectivity even during the hardest times.

## Backstory
This protocol was made by team hackin ka nalang, DLSU team, during Blue Hacks 2024, hosted by the Computer Society of the Ateneo.

## How it works
Instead of using the internet to send and receive info, requests are tunneled through plaintext SMS and parsed with the ZEMM protocol.

### Example:
```
001003dFGcc1§14.5665132,120.9932811|n§john mark|hc§3|d§saklolo po lubog n po kami d2 sa bacoor
```
**Breakdown:**
- `001003` - 001/003, where 001 is the part of the message, and 003 is the expected amount of messages. This is to account for the 160 character limit.
- `dFGcc` - Unique identifier for messages, to be able to stitch all messages once they are all sent.
- `n§john mark` - key§value
- `|` - separator for key value pairs

## Motivation
To allow requests to push through even with just 1 bar of service on your phone. Allowing connectivity even during the harshest rains.

## Pictures
![image](https://github.com/user-attachments/assets/5874317c-3924-4e41-960d-9d93086b9f5c)
![image](https://github.com/user-attachments/assets/032211c1-3e18-4b11-82f4-d974311e21fb)
![image](https://github.com/user-attachments/assets/e3c43209-d6a2-4e59-a373-aca2169ff0df)


This was made by your students, sir Lu! :))
