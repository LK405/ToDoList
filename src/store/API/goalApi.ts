export async function getGoals() {
  const response = await fetch('http://localhost:3000/goals/getGoals', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    }
  });
  return response.json();
}

export async function addGoal(goal: any) {
  const response = await fetch('http://localhost:3000/goals/addGoal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    },
    body: JSON.stringify(goal)
  });
  return response.json();
}

export async function removeGoal(id: string) {
  const response = await fetch(`http://localhost:3000/goals/removeGoal/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '123456'
    }
  });
  return response.json();
}