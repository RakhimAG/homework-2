// 7-9

function createPet(name) {
    let pet_name = name;
    let saturation = 5;
    let mood = 3;

    return function pet(command)
    {
        if (command === undefined)
        {
            return saturation != 0;
        }

        if (saturation == 0)
        {
            alert(`${pet_name}'s saturation is ZERO! ${pet_name} has become sad and ran away😿`);
            return false;
        }

        switch (command) {
            case "feed":
                saturation = clamp(saturation + 3);
                mood = clamp(--mood);
                alert(`${pet_name}'s reaction : ${react(command)}`);
                break;        
            
            case "play":
                saturation = clamp(--saturation);
                mood = clamp(mood + 3);
                alert(`${pet_name}'s reaction : ${react(command)}`);
                break;

            case "status":
                saturation = clamp(--saturation);
                mood = clamp(--mood);

                alert(
`${pet_name}'s mood : ${face(mood)}
${pet_name}'s saturation : ${saturation}/10`
                );

                break;

            case "sleep":
                sleep(8);
                saturation = clamp(--saturation);
                break;  
                    
            default:
                saturation = clamp(--saturation);
                mood = clamp(--mood);
                alert(`${pet_name}'s reaction : ${react(command)}`);
                break;
        }

        return true;
    };
}

function clamp(value, min = 0, max = 10)
{
    if (value > max)
        return max;
    else if (value < min)
        return min;
    else
        return value;
}

function sleep(hours)
{
    if (hours <= 0)
        return;
    
    alert(`Zzz... (${hours} hours left)`);

    return sleep(--hours);
}

const face = (mood) =>
    mood >= 7 ? '😺' :
    mood >= 4 ? '😐' : '😿';

function react(cmd)
{
    switch (cmd) {
        case "feed": return "yummy! 🍗";
        case "play": return "Hurray! ⚽";
        default: return "I don't get it 🤔";
    }
}

function stats(...daysCount)
{
    alert(
`Pet Barsik survived ${daysCount[barsikIndex]}
Pet Pushistik survived ${daysCount[pushistikIndex]}`
    );
}

let cmd = '';

const barsik = createPet("Barsik");
const barsikIndex = 0;

const pushistik = createPet("Pushistik");
const pushistikIndex = 1;

const petsSurvivedDays = [0,0];

while (cmd !== '0') 
{
    cmd = prompt('feed / play / status / sleep / 0 — Exit') ?? '0';

    if (cmd !== '0')
    {
        const petToChoose = prompt(`Choose which pet to use ${cmd} on : Barsik | Pushistik`);
        
        switch (petToChoose) {
            case "Barsik":
                if (barsik(cmd))
                    petsSurvivedDays[barsikIndex]++;   
                if (pushistik())
                    petsSurvivedDays[pushistikIndex]++;

                break;
        
            case "Pushistik":
                if (pushistik(cmd))
                    petsSurvivedDays[pushistikIndex]++;
                if (barsik())
                    petsSurvivedDays[barsikIndex]++;

                break;

            default:
                alert(`You don't have pet named ${petToChoose}`);
                break;
        }
    }    
}

stats(...petsSurvivedDays);